import FloatingBtn from "@components/floatingBtn";
import Layout from "@components/layout";
import SmProfile from "@components/smProfile";
import VideoSVG from "@components/svg/video";
import type { NextPage } from "next";
import Link from "next/link";

const Stream: NextPage = () => {
  return (
    <Layout title="Live" hasTabBar>
      <div className=" py-4 grid md:grid-cols-2 lg:grid-cols-3 ">
        {[1, 2, 1, 1, 1].map((v, i) => {
          return (
            <Link href={`stream/${i}`} key={i}>
              <div className="space-y-3 pt-3 pb-2 px-4">
                <div className="w-full aspect-video bg-slate-300 rounded-md shadow-md " />
                <SmProfile name="Lets try!" time="1hour ago" />
              </div>
            </Link>
          );
        })}
        <Link href="/stream/upload" passHref>
          <FloatingBtn SVG={<VideoSVG />} />
        </Link>
      </div>
    </Layout>
  );
};

export default Stream;
