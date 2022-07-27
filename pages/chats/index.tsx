import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/layout";
import SmProfile from "../../components/smProfile";

const Chats: NextPage = () => {
  return (
    <Layout title="Chats" hasTabBar>
      <div className="py-4 divide-y-[1px] divide-amber-600">
        {[1, 2, 3, 4, 1, 2].map((v, i) => (
          <Link href={`chats/${i}`} key={i}>
            <div className="px-4 py-2 border-gray-400">
              <SmProfile name="John" time="1hour ago" msg="see ya" />
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
