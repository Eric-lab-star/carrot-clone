import type { NextPage } from "next";
import Link from "next/link";
import Question from "../../components/communityQuestion";
import FloatingBtn from "../../components/floatingBtn";
import Layout from "../../components/layout";
import Write from "../../components/svg/write";

const Community: NextPage = () => {
  return (
    <Layout title="Community" hasTabBar>
      <div className="py-4 px-4 ">
        {[1, 2, 3, 4, 5, 6, 7].map((v, i) => (
          <Link key={i} href={`community/${i}`}>
            <a>
              <Question
                question="What is the best ramen restaurant?"
                name="John"
                time="07-12"
                check={1}
                comment={1}
                category="동내생활"
              />
            </a>
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
