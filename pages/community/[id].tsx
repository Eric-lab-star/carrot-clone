import type { NextPage } from "next";
import Btn from "../../components/btn";
import Question from "../../components/communityQuestion";
import Counter from "../../components/counter";
import Layout from "../../components/layout";
import Profile from "../../components/profile";
import SmProfile from "../../components/smProfile";
import CheckSVG from "../../components/svg/check";
import CommentSVG from "../../components/svg/comment";
import TextArea from "../../components/textArea";

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
              <SmProfile
                name="Kim"
                msg="the one near my house"
                time="1hour ago"
              />
            </div>
          );
        })}
        <TextArea placeholder="Please write reply" label="comment" />
        <div className="px-4">
          <Btn>Reply</Btn>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityDetail;
