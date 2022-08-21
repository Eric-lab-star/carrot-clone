import Btn from "@components/btn";
import Input from "@components/input";
import Layout from "@components/layout";
import { User } from "@prisma/client";
import useMutation from "libs/client/useMutation";
import useUser from "libs/client/useUser";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";

interface IForm {
  email?: string;
  phone?: string;
  name?: string;
  formError?: string;
  avatar?: FileList;
}

interface IEditResponse {
  ok: boolean;
  error?: string;
}

const Edit: NextPage = () => {
  const { user } = useUser();
  const [avatarPreview, setAvatarPreview] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
    watch,
  } = useForm<IForm>();
  const [mutateProfile, { loading, data }] =
    useMutation<IEditResponse>(`/api/users/me`);
  const onValid = async ({ email, phone, name, avatar }: IForm) => {
    if (loading) return;
    if (email === "" && phone === "") {
      return setError("formError", {
        message: "Email or Phone number are required",
      });
    }
    if (avatar && avatar.length > 0) {
      const cloudFlareReq = await fetch("/api/files");
      const cloudFlareUrl = await cloudFlareReq.json();
      console.log(cloudFlareUrl);
      return;
      mutateProfile({ email, phone, name, avatar });
    } else {
      mutateProfile({ email, phone, name });
    }
  };
  const avatar = watch("avatar");
  useEffect(() => {
    if (avatar && avatar?.length > 0) {
      const file = avatar[0];
      const fileUrl = URL.createObjectURL(file);
      setAvatarPreview(fileUrl);
    }
  }, [avatar]);

  useEffect(() => {
    if (data && !data.ok && data.error) {
      setError("formError", { message: data.error });
    }
  }, [data, setError]);

  useEffect(() => {
    if (user && user?.email !== null) {
      setValue("email", user.email);
    }
    if (user && user?.phone !== null) {
      setValue("phone", user.phone);
    }
    if (user) {
      setValue("name", user.name);
    }
  }, [user, setValue]);

  return (
    <Layout title="Edit" canGoBack>
      <div className="py-16 px-4 max-w-md m-auto">
        <form
          onSubmit={handleSubmit(onValid)}
          className="mt-1 flex flex-col space-y-3"
        >
          <div className="flex justify-center items-center flex-col space-y-2">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="profile"
                className="w-56 aspect-square rounded-full bg-gray-500 "
              />
            ) : (
              <div className="w-56 aspect-square rounded-full bg-gray-500 " />
            )}

            <label>
              <span className=" bg-amber-500 text-white text-sm rounded-md p-1 cursor-pointer hover:bg-amber-600">
                Change Photo
              </span>
              <input {...register("avatar")} type={"file"} className="hidden" />
            </label>
          </div>
          <Input
            register={register("name")}
            label="Name"
            placeholder="username"
            type="text"
          />
          <Input
            register={register("email")}
            label="Email"
            placeholder="your@email.com"
            type="email"
          />
          <Input
            register={register("phone")}
            label="Phone number"
            placeholder="xxx-xxxx-xxxx"
            prefix="+82"
            type="number"
          />
          <Btn>{loading ? `Updating` : `Edit`}</Btn>
        </form>
        <span className="text-red-500 font-bold text-center">
          {errors.formError && errors.formError.message}
        </span>
      </div>
    </Layout>
  );
};

export default Edit;
