import Btn from "@components/btn";
import Layout from "@components/layout";
import TextArea from "@components/textArea";
import { Post } from "@prisma/client";
import useMutation from "libs/client/useMutation";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface IQuestion {
  question: string;
}

interface IWriteRes {
  ok: boolean;
  post: Post;
}

const Write: NextPage = () => {
  const { register, handleSubmit } = useForm<IQuestion>();
  const [post, { loading, data }] = useMutation<IWriteRes>("/api/posts");
  const onValid = (data: IQuestion) => {
    if (loading) return;
    post(data);
  };
  const router = useRouter();
  useEffect(() => {
    if (data && data.ok) router.push(`/community/${data.post.id}`);
  }, [data, router]);
  return (
    <Layout title="Write">
      <div className=" px-4">
        <form onSubmit={handleSubmit(onValid)} className="mt-2">
          <TextArea
            register={register("question", { required: true, minLength: 5 })}
            required
            placeholder="Please write something here"
            label=" Title"
          />
          <Btn>{loading ? "Loading" : "Submit"}</Btn>
        </form>
      </div>
    </Layout>
  );
};

export default Write;
