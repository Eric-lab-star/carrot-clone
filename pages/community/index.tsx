import type { NextPage } from "next";
import Link from "next/link";
import FloatingBtn from "../../components/floatingBtn";
import Layout from "../../components/layout";
import Write from "../../components/svg/write";

const Community: NextPage = () => {
  return (
    <Layout title="Community" hasTabBar>
      <div className="py-4 px-4 ">
        {[1, 2, 3, 4, 5, 6, 7].map((v, i) => (
          <Link key={i} href={`community/${i}`}>
            <div className="max-w-md m-auto hover:cursor-pointer">
              <span className="text-xs bg-amber-400 px-2 py-[0.5] text-white rounded-sm">
                동네질문
              </span>
              <span className="flex justify-start text-lg items-center py-2">
                <span className="text-xl text-amber-400">Q.</span> What is the
                best mandu restaurant?
              </span>
              <div className="text-xs text-gray-500 flex justify-between">
                <span>니꼬</span>
                <span>18시간 전</span>
              </div>
              <div className="border-y-gray-300 border-y my-2 py-1 flex space-x-2">
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
            </div>
          </Link>
        ))}
        <Link href="community/write" passHref>
          <FloatingBtn SVG={<Write />} />
        </Link>
      </div>
    </Layout>
  );
};

export default Community;
