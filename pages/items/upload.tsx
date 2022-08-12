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
import { useEffect } from "react";
import { useForm } from "react-hook-form";
interface IUpload {
  ok: boolean;
  product: Product;
}

const Upload: NextPage = () => {
  const [uploadProduct, { data, error, loading }] =
    useMutation<IUpload>("/api/products");
  const { register, handleSubmit } = useForm<IUploadForm>();
  const onValid = (data: IUploadForm) => {
    if (loading) return;
    uploadProduct(data);
  };

  const router = useRouter();
  useEffect(() => {
    if (data?.ok) {
      router.push(`${data.product.id}`);
    }
  }, [data, router]);

  return (
    <Layout title="Upload" canGoBack>
      <form onSubmit={handleSubmit(onValid)} className="py-6 px-5">
        <UploadField SVG={<PhotoSVG />} />
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

interface IUploadForm {
  name: string;
  price: string;
  description: string;
}

export default Upload;
