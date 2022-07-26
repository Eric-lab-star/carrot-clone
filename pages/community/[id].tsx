import type { NextPage } from "next";
import Question from "../../components/communityQuestion";
import Counter from "../../components/counter";
import Layout from "../../components/layout";
import Profile from "../../components/profile";
import CheckSVG from "../../components/svg/check";
import CommentSVG from "../../components/svg/comment";

const CommunityDetail: NextPage = () => {
  return (
    <Layout title="Community Detail" canGoBack>
      <div className="py-4 px-4">
        <Profile username="Steven Jobs" view />
        <Question
          question="What is the best ramen restaurant?"
          name="John"
          time="07-12"
          check={1}
          comment={1}
          category="동내생활"
        />

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
                    The best mandu restaurant is the one next to my house
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
