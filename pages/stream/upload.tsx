import Btn from "@components/btn";
import Input from "@components/input";
import Layout from "@components/layout";
import VideoSVG from "@components/svg/video";
import TextArea from "@components/textArea";
import UploadField from "@components/uploadField";
import { Stream } from "@prisma/client";
import useMutation from "libs/client/useMutation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
  const { register, handleSubmit, watch } = useForm<IFrom>();
  const [postStream, { data, loading }] =
    useMutation<IResponse>("/api/streams");
  const onValid = async ({ name, price, description }: IFrom) => {
    if (loading) return;
    if (photo && photo.length > 0) {
      const cloudFlareRes = await fetch("/api/files");
      const { id, uploadURL } = await cloudFlareRes.json();
      const form = new FormData();
      form.append("file", photo[0]);
      await fetch(uploadURL, {
        method: "POST",
        body: form,
      });
      postStream({ name, price, description });
    } else {
      postStream({ name, price, description });
    }
  };
  const router = useRouter();
  const photo = watch("photo");
  const [photoPreview, setPhotoPreview] = useState("");
  useEffect(() => {
    if (photo && photo.length > 0) {
      const file = photo[0];
      setPhotoPreview(URL.createObjectURL(file));
    }
  }, [photo]);
  useEffect(() => {
    if (data && data.ok) router.push(`/stream/${data?.stream.id}`);
  }, [router, data]);

  return (
    <Layout title="Upload" canGoBack>
      <form onSubmit={handleSubmit(onValid)} className="py-6 px-6">
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
