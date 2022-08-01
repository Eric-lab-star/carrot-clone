import Layout from "@components/layout";
import MessageInput from "@components/message";
import Received from "@components/received";
import Send from "@components/send";
import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <Layout title="Chat Detail" canGoBack>
      <div className="absolute w-screen h-screen -top-0 grid-rows-2 grid ">
        <div className="pt-10 px-1 row-span-2 overflow-y-scroll h-screen overscroll-none">
          {[1].map((v, i) => (
            <div key={i}>
              <Received text="Is it sold?" />
              <Send text="not yet" />
            </div>
          ))}
        </div>

        <MessageInput />
      </div>
    </Layout>
  );
};

export default ChatDetail;
