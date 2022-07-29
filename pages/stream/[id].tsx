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
      <div className="absolute inset-0 pt-10 flex flex-col h-screen md:grid md:grid-cols-[1fr_300px] md:grid-rows-[repeat(18,50px)]">
        <div className=" space-y-3 px-4 py-4 drop-shadow-md md:col-span-1 ">
          <div className="flex justify-center">
            <div className="w-full aspect-video bg-slate-300 shadow-md rounded-sm max-w-5xl" />
          </div>
          <SmProfile name="Let's try something new" time="1hour" />
          <div className="overflow-hidden h-32">
            <Product
              title="IPhone"
              price="150"
              desc="My money's in that office,  money's in that office,  money's in that office,  money's in that office,  money's in that office,  money's in that office,  money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. "
            />
          </div>
        </div>
        <div className="px-4 ">
          <div className="h-72 md:h-[90vh] overflow-y-scroll shadow-inner ">
            {[1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1].map((v, i) => {
              return (
                <div key={i}>
                  <Received text="helloo" />
                  <Send text="money's bullshit about it ain't there" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-grow rounded-md bg-amber-500 row-start-[18] row-end-[18] col-start-2  ">
          <MessageInput />
        </div>
      </div>
    </Layout>
  );
};

export default StreamDetail;
