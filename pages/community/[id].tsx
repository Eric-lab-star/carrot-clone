import Btn from "@components/btn";
import Question from "@components/communityQuestion";
import Layout from "@components/layout";
import Profile from "@components/profile";
import SmProfile from "@components/smProfile";
import TextArea from "@components/textArea";
import { Answer, Post, User } from "@prisma/client";
import useMutation from "libs/client/useMutation";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface IData {
  ok: boolean;
  post: IPostWithUser;
  isWondering: boolean;
}
interface IPostWithUser extends Post {
  user: User;
  _count: {
    Answer: number;
    Wondering: number;
  };
  Answer: IAnswerWithUser[];
}

interface IAnswerWithUser extends Answer {
  user: User;
}

interface IForm {
  comment: string;
}

interface IAnswerData {
  ok: boolean;
  answer: Answer;
}

const CommunityDetail: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { register, handleSubmit, reset } = useForm<IForm>();
  const { data, error, mutate } = useSWR<IData>(id ? `/api/posts/${id}` : null);
  const [wonder, { loading }] = useMutation(`/api/posts/${id}/wonder`);
  const [sendAnswer, { data: answerData, loading: answerLoading }] =
    useMutation<IAnswerData>(`/api/posts/${id}/answers`);
  const onWonderClick = () => {
    if (!data) return;
    mutate(
      {
        ...data,
        post: {
          ...data.post,
          _count: {
            ...data.post._count,
            Wondering: data.isWondering
              ? data.post._count.Wondering - 1
              : data?.post._count.Wondering + 1,
          },
        },
        isWondering: !data.isWondering,
      },
      false
    );
    if (!loading) {
      wonder({});
    }
  };
  const onValid = (form: IForm) => {
    if (answerLoading) return;
    sendAnswer(form);
  };

  useEffect(() => {
    if (answerData && answerData.ok) {
      reset();
    }
  }, [answerData, reset]);

  return (
    <Layout title="Community Detail" canGoBack>
      <div className="py-4 px-4">
        {data && data.post ? (
          <>
            <Profile
              username={data?.post?.user.name}
              userId={data?.post?.userId}
              view
            />
            <Question
              isWondering={data.isWondering}
              question={data.post?.title}
              name={data.post?.user.name}
              time={(data.post?.createdAt + "").slice(0, 10)}
              check={data.post?._count.Wondering}
              comment={data.post?._count.Answer}
              category="동내생활"
              onWonderClick={onWonderClick}
            />
          </>
        ) : (
          <div>This page is not ready or deleted</div>
        )}
        {/* comment */}
        {data?.post?.Answer.map((answer) => {
          return (
            <div
              key={answer.id}
              className="px-4 border-b space-y-1 border-gray-400 py-2"
            >
              <SmProfile
                name={answer.user.name}
                msg={answer.answer}
                time={(answer.createdAt + "").slice(0, 10)}
              />
            </div>
          );
        })}
        <form onSubmit={handleSubmit(onValid)}>
          <TextArea
            register={register("comment", { required: true, minLength: 5 })}
            required
            placeholder="Please write reply"
            label="comment"
          />
          <div className="px-4">
            <Btn>{answerLoading ? "Sending" : "Reply"}</Btn>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CommunityDetail;
