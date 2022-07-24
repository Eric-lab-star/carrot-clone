import type { NextPage } from "next";
import Link from "next/link";
import FloatingBtn from "../../components/floatingBtn";
import Layout from "../../components/layout";
import VideoSVG from "../../components/svg/video";

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
        <FloatingBtn SVG={<VideoSVG />} />
      </div>
    </Layout>
  );
};

export default Stream;
