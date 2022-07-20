import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/layout";

const Stream: NextPage = () => {
  return (
    <Layout title="Live" hasTabBar>
      <div className=" py-4 grid md:grid-cols-2 lg:grid-cols-3 ">
        {[1, 2, 1, 1, 1].map((v, i) => {
          return (
            <Link href={`stream/${i}`} key={i}>
              <div className="space-y-3 pt-3 pb-2 px-4">
                <div className="w-full aspect-video bg-slate-300 rounded-md shadow-md " />
                <div className="flex justify-start space-x-2 items-start">
                  <div className="w-8 h-8 rounded-full bg-gray-500" />
                  <div>
                    <h1 className="text-base leading-4">
                      Lets try something new
                    </h1>
                    <span className="text-xs font-thin">1시간 전</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        <button className="fixed bottom-3 right-5 border-transparent bg-amber-400 rounded-full text-white p-2 shadow-lg hover:bg-amber-500 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Stream;
