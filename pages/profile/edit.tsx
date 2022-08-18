import Btn from "@components/btn";
import Input from "@components/input";
import Layout from "@components/layout";
import { User } from "@prisma/client";
import useUser from "libs/client/useUser";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email?: string;
  phone?: string;
  formError?: string;
}

const Edit: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<IForm>();
  const onValid = ({ email, phone }: IForm) => {
    if (email === "" && phone === "") {
      setError("formError", { message: "Email or Phone number are required" });
    }
  };

  useEffect(() => {
    if (user && user?.email !== null) {
      setValue("email", user.email);
    }
    if (user && user?.phone !== null) {
      setValue("phone", user.phone);
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
            <div className="w-56 aspect-square rounded-full bg-gray-500 " />
            <label>
              <span className=" bg-amber-500 text-white text-sm rounded-md p-1 cursor-pointer hover:bg-amber-600">
                Change Photo
              </span>
              <input type={"file"} className="hidden" />
            </label>
          </div>
          <Input
            register={register("email")}
            label="Email"
            placeholder="your@email.com"
          />
          <Input
            register={register("phone")}
            label="Phone number"
            placeholder="xxx-xxxx-xxxx"
            prefix="+82"
          />
          <Btn>Edit</Btn>
        </form>
        <span className="text-red-500 font-bold text-center">
          {errors.formError && errors.formError.message}
        </span>
      </div>
    </Layout>
  );
};

export default Edit;
