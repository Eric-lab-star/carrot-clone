import type { NextPage } from "next";
import Layout from "../../components/layout";

const CommunityDetail: NextPage = () => {
  return (
    <Layout title="Community Detail" canGoBack>
      <div className="py-16">
        <div className="flex items-center space-x-3 py-2 border px-2">
          <div className="h-12 w-12 rounded-full bg-gray-200" />
          <div>
            <p className="font-medium">Steve Jebs</p>
            <p className="cursor-pointer hover:text-amber-500 text-xs text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className="px-4">
          <span className="text-xs bg-amber-400 px-2 py-[0.5] text-white rounded-sm">
            동네질문
          </span>
          <span className="flex justify-start text-lg items-center py-2">
            <span className="text-xl text-amber-400">Q.</span> What is the best
            mandu restaurant?
          </span>
        </div>
        <div className="border-y-gray-300 border-y py-1 flex space-x-2">
          <span className="flex items-center pl-4 text-sm space-x-1 hover:cursor-default">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>궁금해요 1</span>
          </span>
          <span className="flex items-center text-sm space-x-1 hover:cursor-default">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>답변 1</span>
          </span>
        </div>
        {[1, 2, 3, 4, 5].map((v, i) => {
          return (
            <div
              key={i}
              className="px-4 border-b space-y-1 border-gray-400 py-2"
            >
              <div className="flex items-start space-x-2">
                <div className="rounded-full h-7 w-7 bg-gray-300" />
                <div>
                  <span className="text-sm mr-2">Steven Jobs</span>
                  <span className="text-xs text-gray-300">2시간 전</span>
                  <div className="text-sm">
                    The best mandu restaurant is the one next to my house{" "}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="mt-2 px-4">
          <textarea
            rows={4}
            className="shadow-md rounded-md text-xs h-20 max-h-20 min-h-full w-full focus:ouline-none focus:ring-transparent focus:border-amber-500 overflow-scroll"
            id="desc"
            placeholder="Please write reply..."
          />
        </div>
        <div className="px-4">
          <button className="focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-1 rounded-md  w-full py-1 bg-amber-400 text-amber-600 shadow-md mt-2">
            Reply
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityDetail;
