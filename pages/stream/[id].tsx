import type { NextPage } from "next";
import H2 from "../../components/h2";
import Layout from "../../components/layout";
import MessageInput from "../../components/message";
import Product from "../../components/product";
import Received from "../../components/received";
import Send from "../../components/send";
import SmProfile from "../../components/smProfile";

const StreamDetail: NextPage = () => {
  return (
    <Layout title="Video" canGoBack>
      <div className="py-2 h-screen px-4 md:flex md:space-x-4">
        <div className="space-y-3 pt-3 pb-2 flex-1">
          <div className="w-full aspect-video bg-slate-300 shadow-md rounded-sm" />

          <SmProfile name="Let's try something new" time="1hour" />
          <Product
            title="IPhone"
            price="150"
            desc="My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. "
          />
        </div>
        <div className="md:w-60 lg:w-72 ">
          <H2 text="Live Chat" />
          <div className="py-2 h-[100vh] overflow-y-auto  shadow-inner">
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
      </div>
    </Layout>
  );
};

export default StreamDetail;
