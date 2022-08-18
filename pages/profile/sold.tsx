import Counter from "@components/counter";
import ItemProfile from "@components/itemProfile";
import Layout from "@components/layout";
import CommentSVG from "@components/svg/comment";
import HeartSVG from "@components/svg/heart";
import { Product, Sale } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";

interface IData {
  [key: string]: IRecordsWithProduct[];
}

interface IRecordsWithProduct extends Sale {
  product: IProductwithCount;
}

interface IProductwithCount extends Product {
  _count: {
    fav: number;
  };
}

const Sold: NextPage = () => {
  const { data } = useSWR<IData>("/api/users/me/sales");
  return (
    <Layout title="Sold" canGoBack>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
        {data?.sales?.map((sale) => (
          <Link key={sale.id} href={`/items/${sale.productId}`}>
            <div className="flex justify-between border-b px-4 py-5 cursor-pointer ">
              <ItemProfile
                title={sale.product.name}
                price={sale.product.price}
                date={(sale.product.createdAt + "").slice(0, 10)}
              />
              <div className="flex items-end jutify-end space-x-2">
                <Counter
                  SVG={<HeartSVG w="4" h="4" />}
                  text={sale.product._count.fav + ""}
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

export default Sold;
