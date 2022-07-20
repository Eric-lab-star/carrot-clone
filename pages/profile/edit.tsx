import type { NextPage } from "next";
import Layout from "../../components/layout";

const Edit = () => {
  return (
    <Layout title="Edit" canGoBack>
      <div className="py-16 px-4">
        <form className="mt-1 flex flex-col space-y-3">
          <div className="flex justify-center items-center flex-col space-y-2">
            <div className="w-36 aspect-square rounded-md bg-gray-500 " />
            <label>
              <span className=" bg-amber-500 text-white  rounded-md p-1 cursor-pointer hover:bg-amber-600">
                Change Photo
              </span>
              <input type={"file"} className="hidden" />
            </label>
          </div>
          <div>
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              id="email"
              className="text-black placeholder:text-gray-300 py-1 w-full border rounded-md border-amber-700 shadow-md focus:border-amber-500 focus:ring-amber-500"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="phone">
              Phone Number
            </label>
            <div className="flex shadow-sm rounded-md ">
              <span className="flex justify-center items-center px-1 border rounded-l-md  select-none bg-gray-50 text-gray-400 border-gray-400 border-r-transparent">
                +82
              </span>
              <input
                id="number"
                className="w-full focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-r-md py-1 text-black placeholder:text-gray-300"
                type="number"
                required
                placeholder="10-4940-1111"
              />
            </div>
          </div>
          <button className="bg-amber-300 text-white rounded-md shadow-md py-1 border-amber-700 border focus:border-amber-500 focus:ring-amber-500 focus:ring-1 focus:outline-none">
            Edit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Edit;
