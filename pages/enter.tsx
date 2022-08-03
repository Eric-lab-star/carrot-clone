import { useState } from "react";
import type { NextPage } from "next";
import { cls } from "../libs/client/utils";
import TwitterSVG from "../components/svg/twitter";
import GitHubSVG from "../components/svg/github";
import Btn from "../components/btn";
import Input from "../components/input";
import { useForm } from "react-hook-form";
import useMutation from "../libs/client/useMutation";
interface IFormValue {
  email?: string;
  phone?: string;
}
interface IToken {
  token: string;
}
interface IMutation {
  ok: boolean;
}
const Enter: NextPage = () => {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const [mutate, { data, error, loading }] =
    useMutation<IMutation>("/api/users/enter");
  const [
    confirmToken,
    { data: tokenData, error: tokenError, loading: tokenLoading },
  ] = useMutation<IMutation>("/api/users/confirm");
  const onEmailClick = () => {
    reset();
    setMethod("email");
  };
  const onPhoneClick = () => {
    reset();
    setMethod("phone");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValue>({
    mode: "onChange",
  });
  const {
    register: tokenRegister,
    handleSubmit: handleToken,
    formState: { errors: tokenFormError },
  } = useForm<IToken>({
    mode: "onChange",
  });
  const onValid = (validForm: IFormValue) => {
    if (loading) return;
    mutate(validForm);
  };
  const onValidToken = (validForm: IToken) => {
    if (tokenLoading) return;
    confirmToken(validForm);
  };
  return (
    <div className={`py-5 px-6 min-h-screen text-amber-400`}>
      <h3 className="text-2xl text-center font-semibold">Enter to Carrot</h3>
      <div>
        {data?.ok ? (
          <form
            onSubmit={handleToken(onValidToken)}
            className="mt-1 space-y-2 flex flex-col"
          >
            <div>
              <Input
                register={tokenRegister("token", {
                  required: "this field is required",
                  pattern: {
                    value: /\d+/,
                    message: "please type verification vode",
                  },
                  validate: (v) => !v?.includes(`/\w/`) || "Don't write words",
                })}
                label="Type verfication code you recieved"
                placeholder="code"
              />
              <span>{tokenFormError.token?.message}</span>
            </div>
            <Btn>
              {tokenLoading ? "Please wait..." : "Please verify your code"}
            </Btn>
          </form>
        ) : (
          <>
            <div className="text-center">
              <h5>Enter using:</h5>
              <div className=" grid grid-cols-2 border-b border-white border-opacity-50">
                <button
                  className={cls(
                    "pb-2  font-medium border-b-2 transition",
                    method === "email"
                      ? "border-amber-500 text-amber-500"
                      : "border-transparent"
                  )}
                  onClick={onEmailClick}
                >
                  Email
                </button>
                <button
                  className={cls(
                    "pb-2  font-medium border-b-2 transition",
                    method === "phone"
                      ? "border-amber-500 text-amber-500"
                      : "border-transparent"
                  )}
                  onClick={onPhoneClick}
                >
                  Phone
                </button>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onValid)}
              className="mt-1 space-y-2 flex flex-col"
            >
              <div>
                {method === "email" ? (
                  <>
                    <Input
                      register={register("email", {
                        required: "email is required",
                        pattern: {
                          value: /([\w\d]+)@([\w\d]+).com/,
                          message: "please write valid email format",
                        },
                      })}
                      label="Email Addrees"
                      placeholder="your@email.com"
                      type="email"
                    />
                    <span>{errors.email?.message}</span>
                  </>
                ) : null}
                {method === "phone" ? (
                  <>
                    <Input
                      register={register("phone", {
                        required: "phone number is required",
                        pattern: {
                          value: /\d+/,
                          message: "please type numbers",
                        },
                        validate: (v) =>
                          !v?.includes("-") || "Don't write dash(-)",
                      })}
                      label="Phone Number"
                      placeholder="010-xxxx-xxxx"
                    />
                    <span>{errors.phone?.message}</span>
                  </>
                ) : null}
              </div>
              <Btn>
                {loading ? (
                  "Please wait..."
                ) : (
                  <>
                    {method === "email" ? "Get login link" : null}
                    {method === "phone" ? "Get one-time password" : null}
                  </>
                )}
              </Btn>
            </form>
          </>
        )}
        <div className="mt-4">
          <div className="relative">
            <div className="border-t border-black border-opacity-50" />
            <div className="relative -top-3 text-center">
              <span className={`bg-white px-3 text-sm`}>Or enter with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Btn SVG={<TwitterSVG />} />
            <Btn SVG={<GitHubSVG />} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Enter;
