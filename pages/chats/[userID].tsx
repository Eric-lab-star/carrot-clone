import type { NextPage } from "next";
import Layout from "../../components/layout";
import MessageInput from "../../components/message";

const ChatDetail: NextPage = () => {
  return (
    <Layout title="Chat Detail" canGoBack>
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
        <MessageInput />
      </div>
    </Layout>
  );
};

export default ChatDetail;
