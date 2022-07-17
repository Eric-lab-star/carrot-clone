import { useState } from "react";
import type { NextPage } from "next";
import { cls } from "../libs/utils";
const BGColor = "#e67e22";

const Enter: NextPage = () => {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");
  return (
    <div className={`py-5 px-6 bg-[${BGColor}] min-h-screen text-amber-400`}>
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
          <button className="bg-amber-300 text-white rounded-md shadow-md py-1 border-amber-700 border focus:border-amber-500 focus:ring-amber-500 focus:ring-1 focus:outline-none">
            {method === "email" ? "Get login link" : null}
            {method === "phone" ? "Get one-time password" : null}
          </button>
        </form>
        <div className="mt-4">
          <div className="relative">
            <div className="border-t border-white border-opacity-50" />
            <div className="relative -top-3 text-center">
              <span className={`bg-[${BGColor}] px-3 text-sm`}>
                Or enter with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="flex justify-center items-center bg-amber-600 py-1 rounded-md shadow-md border-amber-600 border">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="flex justify-center items-center bg-amber-600 py-1 rounded-md shadow-md border-amber-600 border">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Enter;
