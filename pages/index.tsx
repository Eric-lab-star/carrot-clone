import type { NextPage } from "next";
import Link from "next/link";
import Counter from "../components/counter";
import FloatingBtn from "../components/floatingBtn";
import ItemProfile from "../components/itemProfile";
import Layout from "../components/layout";
import CommentSVG from "../components/svg/comment";
import HeartSVG from "../components/svg/heart";
import PlusSVG from "../components/svg/plus";

const Home: NextPage = () => {
  return (
    <Layout title="Home" hasTabBar>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link key={i} href={`/items/${i}`}>
            <div className="flex justify-between border-b px-4 py-5 cursor-pointer ">
              <ItemProfile
                title="MacBook Pro 15"
                price="1000"
                color="space gray"
              />
              <div className="flex items-end jutify-end space-x-2">
                <Counter SVG={<HeartSVG w="4" h="4" />} text="1" />
                <Counter SVG={<CommentSVG w="4" h="4" />} text="1" />
              </div>
            </div>
          </Link>
        ))}
        <Link href={"/items/upload"}>
          <FloatingBtn SVG={<PlusSVG />} />
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
