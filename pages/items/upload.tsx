import Btn from "@components/btn";
import Input from "@components/input";
import Layout from "@components/layout";
import PhotoSVG from "@components/svg/photo";
import TextArea from "@components/textArea";
import UploadField from "@components/uploadField";
import { Product } from "@prisma/client";
import useMutation from "libs/client/useMutation";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
interface IUpload {
  ok: boolean;
  product: Product;
}

interface IUploadForm {
  name: string;
  price: string;
  description: string;
  photo: FileList;
}
const Upload: NextPage = () => {
  const [uploadProduct, { data, error, loading }] =
    useMutation<IUpload>("/api/products");
  const { register, handleSubmit, watch } = useForm<IUploadForm>();
  const onValid = async ({ price, photo, description, name }: IUploadForm) => {
    if (loading) return;
    if (photo && photo.length > 0) {
      const cloudFlareRes = await fetch("/api/files");
      const { id: photoID, uploadURL } = await cloudFlareRes.json();
      const form = new FormData();
      form.append("file", photo[0], name);
      await fetch(uploadURL, {
        method: "POST",
        body: form,
      });
      uploadProduct({ price, photo: photoID, description, name });
    }
    uploadProduct({ price, photo, description, name });
  };
  const photo = watch("photo");
  const [preview, setPreview] = useState("");
  useEffect(() => {
    if (photo && photo.length > 0) {
      const file = photo[0];
      const fileURL = URL.createObjectURL(file);
      setPreview(fileURL);
    }
  }, [photo]);
  const router = useRouter();
  useEffect(() => {
    if (data?.ok) {
      router.push(`${data.product.id}`);
    }
  }, [data, router]);

  return (
    <Layout title="Upload" canGoBack>
      <form onSubmit={handleSubmit(onValid)} className="py-6 px-5">
        {preview ? (
          <img
            src={preview}
            className="mb-3 rounded-md h-40 w-full flex justify-center items-center"
          />
        ) : (
          <UploadField register={register("photo")} SVG={<PhotoSVG />} />
        )}

        <Input
          required
          register={register("name", { required: true })}
          label="Name"
          placeholder="Please write item title"
        />
        <Input
          required
          register={register("price", { required: true })}
          label="Price"
          placeholder="0.00"
          prefix="$"
          suffix="USD"
        />
        <TextArea
          required
          register={register("description", { required: true })}
          label="Description"
          placeholder="Please introduce your items. Detail explanation has higher chance to be sold."
        />
        <Btn>{loading ? "Please wait a moment" : "Upload Product"}</Btn>
      </form>
    </Layout>
  );
};

export default Upload;
