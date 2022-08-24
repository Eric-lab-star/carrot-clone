import { Product } from "@prisma/client";
import useUser from "libs/client/useUser";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";
import Counter from "../components/counter";
import FloatingBtn from "../components/floatingBtn";
import ItemProfile from "../components/itemProfile";
import Layout from "../components/layout";
import CommentSVG from "../components/svg/comment";
import HeartSVG from "../components/svg/heart";
import PlusSVG from "../components/svg/plus";
interface IData {
  ok: boolean;
  products: ILikesNProduct[];
}

interface ILikesNProduct extends Product {
  _count: {
    fav: number;
  };
}

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR<IData>("/api/products");
  return (
    <Layout title="Home" hasTabBar>
      <Head>
        <title>Home</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
        {data?.products?.map((product) => (
          <Link key={product.id} href={`/items/${product.id}`}>
            <div className="flex justify-between border-b px-4 py-5 cursor-pointer ">
              <ItemProfile
                title={product.name}
                price={product.price}
                date={(product.updatedAt + "").slice(0, 10)}
              />
              <div className="flex items-end jutify-end space-x-2">
                <Counter
                  SVG={<HeartSVG w="4" h="4" />}
                  text={product._count.fav + ""}
                />
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
