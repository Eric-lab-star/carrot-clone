import type { NextPage } from "next";
import Layout from "../../components/layout";

const ChatDetail: NextPage = () => {
  return (
    <Layout title="Chat Detail">
      <div className="py-16">
        <div className="text-gray-900 flex items-start space-x-2 w-1/3 max-w-fit bg-amber-400 shadow-md py-2 px-2 rounded-md">
          <div className="h-8 aspect-square rounded-full bg-gray-400" />
          <div className=" text-sm leading-4">
            Hi how much are you selling them for?
          </div>
        </div>
        <div className="text-gray-900 relative h-10">
          <div className="flex absolute right-0 flex-row-reverse max-w-fit  items-start space-x-2 space-x-reverse w-1/3 bg-amber-400 shadow-md py-2 px-2 rounded-md">
            <div className="h-8 aspect-square rounded-full bg-gray-400" />
            <div className=" text-sm leading-4">I want 2000</div>
          </div>
        </div>

        <div className="fixed rounded-t-md bottom-0 w-screen bg-amber-500 py-2 px-2">
          <div className="flex">
            <input
              type={"text"}
              className=" text-xs flex-1 rounded-md h-10 min-h-full focus:ring-1 focus:ring-amber-700 focus:ring-offset-2 focus:outline-none focus:border-amber-500 overflow-scroll border-amber-500 pl-8"
            />
            <div className="absolute top-[20px] left-4 cursor-pointer  hover:bg-amber-400 h-5 aspect-square bg-amber-200 rounded-full flex  items-center justify-center">
              <span className=" text-white ">&rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatDetail;
