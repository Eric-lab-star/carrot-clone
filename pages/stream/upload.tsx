import Btn from "@components/btn";
import Input from "@components/input";
import Layout from "@components/layout";
import VideoSVG from "@components/svg/video";
import TextArea from "@components/textArea";
import UploadField from "@components/uploadField";
import { Stream } from "@prisma/client";
import useMutation from "libs/client/useMutation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface IFrom {
  name: string;
  description: string;
  price: string;
}

interface IResponse {
  ok: boolean;
  stream: Stream;
}

export default function UploadStream() {
  const { register, handleSubmit } = useForm<IFrom>();
  const [postStream, { data, loading }] =
    useMutation<IResponse>("/api/streams");
  const onValid = ({ name, price, description }: IFrom) => {
    if (loading) return;
    postStream({ name, price, description });
  };
  const router = useRouter();

  useEffect(() => {
    if (data && data.ok) router.push(`/stream/${data?.stream.id}`);
  }, [router, data]);

  return (
    <Layout title="Upload" canGoBack>
      <form onSubmit={handleSubmit(onValid)} className="py-6 px-6">
        <UploadField SVG={<VideoSVG />} />
        <Input
          register={register("name")}
          label="Title"
          type="text"
          placeholder="Title"
        />
        <Input
          register={register("price")}
          label="Price"
          type="number"
          placeholder="Price"
        />
        <TextArea
          required
          register={register("description")}
          label="Summary"
          placeholder="Please describe about your video."
        />
        <Btn>{loading ? "loading" : "Go Live"}</Btn>
      </form>
    </Layout>
  );
}
