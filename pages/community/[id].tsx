import Btn from "@components/btn";
import Question from "@components/communityQuestion";
import Layout from "@components/layout";
import Profile from "@components/profile";
import SmProfile from "@components/smProfile";
import TextArea from "@components/textArea";
import { Answer, Post, User } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface IData {
  ok: boolean;
  post: IPostWithUser;
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

const CommunityDetail: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { register, handleSubmit } = useForm<IForm>();

  const { data, error } = useSWR<IData>(id ? `/api/posts/${id}` : null);
  console.log(data);
  return (
    <Layout title="Community Detail" canGoBack>
      <div className="py-4 px-4">
        {data ? (
          <>
            <Profile
              username={data?.post.user.name}
              userId={data?.post.userId}
              view
            />
            <Question
              question={data.post.title}
              name={data.post.user.name}
              time={(data.post.createdAt + "").slice(0, 10)}
              check={data.post._count.Wondering}
              comment={data.post._count.Answer}
              category="동내생활"
            />
          </>
        ) : (
          <div>Loading</div>
        )}
        {/* comment */}
        {data?.post.Answer.map((answer) => {
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
        <TextArea
          register={register("comment", { required: true, minLength: 5 })}
          required
          placeholder="Please write reply"
          label="comment"
        />
        <div className="px-4">
          <Btn>Reply</Btn>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityDetail;
