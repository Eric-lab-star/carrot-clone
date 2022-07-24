import { useState } from "react";
import type { NextPage } from "next";
import { cls } from "../libs/utils";
import LoginBtn from "../components/LoginBtn";
import TwitterSVG from "../components/svg/twitter";
import GitHubSVG from "../components/svg/github";

const Enter: NextPage = () => {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");
  return (
    <div className={`py-5 px-6 min-h-screen text-amber-400`}>
      <h3 className="text-2xl text-center font-semibold">Enter to Carrot</h3>
      <div>
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
        <form className="mt-1 space-y-2 flex flex-col">
          <label className="">
            {method === "email" ? "Email address" : null}
            {method === "phone" ? "Phone number" : null}
          </label>
          <div>
            {method === "email" ? (
              <input
                className="text-black placeholder:text-gray-300 py-1 w-full border rounded-md border-amber-700 shadow-md focus:border-amber-500 focus:ring-amber-500"
                type="email"
                placeholder="your@email.com"
                required
              />
            ) : null}
            {method === "phone" ? (
              <div className="flex shadow-sm rounded-md ">
                <span className="flex justify-center items-center px-1 border rounded-l-md  select-none bg-gray-50 text-gray-400 border-gray-400 border-r-transparent">
                  +82
                </span>
                <input
                  className="w-full focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-r-md py-1 text-black placeholder:text-gray-300"
                  type="number"
                  required
                  placeholder="10-4940-1111"
                />
              </div>
            ) : null}
          </div>
          <LoginBtn>
            {method === "email" ? "Get login link" : null}
            {method === "phone" ? "Get one-time password" : null}
          </LoginBtn>
        </form>
        <div className="mt-4">
          <div className="relative">
            <div className="border-t border-black border-opacity-50" />
            <div className="relative -top-3 text-center">
              <span className={`bg-white px-3 text-sm`}>Or enter with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <LoginBtn SVG={<TwitterSVG />} />
            <LoginBtn SVG={<GitHubSVG />} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Enter;
