import Counter from "@components/counter";
import ItemProfile from "@components/itemProfile";
import Layout from "@components/layout";
import CommentSVG from "@components/svg/comment";
import HeartSVG from "@components/svg/heart";
import { Fav, Product, Sale } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";

interface IData {
  [key: string]: IRecordsWithProduct[];
}

interface IRecordsWithProduct extends Fav {
  product: IProductwithCount;
}

interface IProductwithCount extends Product {
  _count: {
    [key: string]: number;
  };
}

const Love: NextPage = () => {
  const { data } = useSWR<IData>("/api/users/me/favs");
  return (
    <Layout title="Love" canGoBack>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
        {data?.favs?.map((record, i) => (
          <Link key={record.id} href={`/items/${record.product.id}`}>
            <div className="flex justify-between border-b px-4 py-5 cursor-pointer ">
              <ItemProfile
                title={record.product.name}
                price={record.product.price}
                date={(record.product.createdAt + "").slice(0, 10)}
              />
              <div className="flex items-end jutify-end space-x-2">
                <Counter
                  SVG={<HeartSVG w="4" h="4" />}
                  text={record.product._count.fav + ""}
                />
                <Counter SVG={<CommentSVG w="4" h="4" />} text="1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Love;
