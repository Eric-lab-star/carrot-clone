import Btn from "@components/btn";
import Input from "@components/input";
import Layout from "@components/layout";
import type { NextPage } from "next";

const Edit: NextPage = () => {
  return (
    <Layout title="Edit" canGoBack>
      <div className="py-16 px-4 max-w-md m-auto">
        <form className="mt-1 flex flex-col space-y-3">
          <div className="flex justify-center items-center flex-col space-y-2">
            <div className="w-56 aspect-square rounded-full bg-gray-500 " />
            <label>
              <span className=" bg-amber-500 text-white text-sm rounded-md p-1 cursor-pointer hover:bg-amber-600">
                Change Photo
              </span>
              <input type={"file"} className="hidden" />
            </label>
          </div>
          <Input label="Email" placeholder="your@email.com" />
          <Input
            label="Phone number"
            placeholder="xxx-xxxx-xxxx"
            prefix="+82"
          />
          <Btn>Edit</Btn>
        </form>
      </div>
    </Layout>
  );
};

export default Edit;
