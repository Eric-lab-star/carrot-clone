import FloatingBtn from "@components/floatingBtn";
import Layout from "@components/layout";
import SmProfile from "@components/smProfile";
import VideoSVG from "@components/svg/video";
import { Stream } from "@prisma/client";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

interface IData {
  ok: boolean;
  streams: Stream[];
}

const Stream: NextPage = () => {
  const { data } = useSWR<IData>("/api/streams");
  return (
    <Layout title="Live" hasTabBar>
      <div className=" py-4 grid md:grid-cols-2 lg:grid-cols-3 ">
        {data?.streams?.map((stream) => {
          return (
            <Link href={`stream/${stream.id}`} key={stream.id}>
              <div className="space-y-3 pt-3 pb-2 px-4">
                <div className="w-full aspect-video overflow-hidden bg-slate-300 rounded-md shadow-md relative">
                  <Image
                    src={`https://customer-m033z5x00ks6nunl.cloudflarestream.com/${stream.streamId}/thumbnails/thumbnail.jpg?height=270`}
                    layout="fill"
                    alt="thumbnail"
                  />
                </div>
                <SmProfile
                  name={stream.name}
                  time={(stream.createdAt + "").slice(0, 10)}
                />
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
