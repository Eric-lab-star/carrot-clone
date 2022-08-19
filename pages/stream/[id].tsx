import Layout from "@components/layout";
import MessageInput from "@components/message";
import Product from "@components/product";
import Received from "@components/received";
import Send from "@components/send";
import SmProfile from "@components/smProfile";
import { Message, Stream, User } from "@prisma/client";
import useMutation from "libs/client/useMutation";
import useUser from "libs/client/useUser";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { userAgent } from "next/server";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface IStream {
  ok: boolean;
  stream: IStreamWithUserandMsg;
}

interface IStreamWithUserandMsg extends Stream {
  user: User;
  message: IMessagewithUser[];
}

interface IMessagewithUser extends Message {
  user: {
    id: number;
    avatar: string;
  };
}

interface IMSG {
  message: string;
}

const StreamDetail: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { data, mutate } = useSWR<IStream>(id ? `/api/streams/${id}` : null);
  const { register, handleSubmit, reset } = useForm<IMSG>();
  const [postMsg, { loading, data: response }] = useMutation<{ ok: true }>(
    `/api/streams/${id}/msg`
  );
  const { user } = useUser();
  const onValid = (message: IMSG) => {
    if (loading) return;
    reset();
    postMsg({ ...message });
  };
  useEffect(() => {
    if (response && response.ok) mutate();
  }, [mutate, response]);
  return (
    <Layout title="Video" canGoBack>
      <div className="absolute inset-0 pt-10 flex flex-col h-screen md:grid md:grid-cols-[1fr_300px] md:grid-rows-[repeat(18,50px)]">
        <div className=" space-y-3 px-4 py-4 drop-shadow-md md:col-span-1 ">
          <div className="flex justify-center">
            <div className="w-full aspect-video bg-slate-300 shadow-md rounded-sm max-w-5xl" />
          </div>
          <SmProfile
            name={data?.ok && data ? data.stream?.user.name : "Loading"}
            time={
              data?.ok && data
                ? (data.stream?.createdAt + "").slice(0, 10)
                : "loading"
            }
          />
          <div className="overflow-hidden h-32">
            <Product
              title={data?.ok && data ? data?.stream?.name : "Loading"}
              price={data?.ok && data ? data?.stream?.price : "Loading"}
              desc={data?.ok && data ? data?.stream?.description : "Loading"}
            />
          </div>
        </div>
        <div className="px-4 ">
          <div className="h-72 md:h-[90vh] overflow-y-scroll shadow-inner ">
            {data?.stream?.message?.map((msg) => {
              return (
                <div key={msg.id}>
                  {msg.user.id === user?.id ? (
                    <Send text={msg.message} />
                  ) : (
                    <Received text={msg.message} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onValid)}
          className="flex-grow rounded-md bg-amber-500 row-start-[18] row-end-[18] col-start-2  "
        >
          <MessageInput register={register("message", { required: true })} />
        </form>
      </div>
    </Layout>
  );
};

export default StreamDetail;
