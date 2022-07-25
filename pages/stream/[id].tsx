import type { NextPage } from "next";
import Layout from "../../components/layout";
import MessageInput from "../../components/message";
import Product from "../../components/product";
import Received from "../../components/received";
import Send from "../../components/send";
import SmProfile from "../../components/smProfile";

const StreamDetail: NextPage = () => {
  return (
    <Layout title="Video" canGoBack>
      <div className="py-2">
        <div className="space-y-3 pt-3 pb-2 px-4">
          <div className="flex justify-center bg-slate-500 rounded-md">
            <div className=" w-full max-w-3xl aspect-video bg-slate-300 shadow-md " />
          </div>
          <SmProfile title="Let's try something new" desc="1hour" />
          <Product
            title="IPhone"
            price="150"
            desc="My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. "
          />
        </div>
        <h1 className="font-extrabold text-2xl px-4">Live Chat</h1>

        <div className="px-4 py-2 max-h-96 overflow-y-scroll overscroll-none shadow-inner">
          {[1, 1, 1, 1, 1, 1, 1].map((v, i) => {
            return (
              <div key={i}>
                <Received text="helloo" />
                <Send text="money's bullshit about it ain't there" />
              </div>
            );
          })}
        </div>
        <MessageInput />
      </div>
    </Layout>
  );
};

export default StreamDetail;
