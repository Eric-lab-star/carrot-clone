import Question from "@components/communityQuestion";
import FloatingBtn from "@components/floatingBtn";
import Layout from "@components/layout";
import Write from "@components/svg/write";
import { Post } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";

interface IData {
  ok: boolean;
  post: IPostWithUserandCount[];
}

interface IPostWithUserandCount extends Post {
  user: {
    name: string;
  };
  _count: {
    Wondering: number;
    Answer: number;
  };
}

const Community: NextPage = () => {
  const { data } = useSWR<IData>("/api/posts");

  return (
    <Layout title="Community" hasTabBar>
      <div className="py-4 px-4 ">
        {data?.post.map((post) => (
          <Link key={post.id} href={`community/${post.id}`}>
            <a>
              <Question
                question={post.title}
                name={post.user.name}
                time={(post.createdAt + "").slice(0, 10)}
                check={post._count.Wondering}
                comment={post._count.Answer}
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
