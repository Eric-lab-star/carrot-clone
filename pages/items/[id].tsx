import Btn from "@components/btn";
import H2 from "@components/h2";
import Layout from "@components/layout";
import Item from "@components/product";
import Profile from "@components/profile";
import SmProfile from "@components/smProfile";
import HeartSVG from "@components/svg/heart";
import { Product } from "@prisma/client";
import useUser from "libs/client/useUser";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import useMutation from "libs/client/useMutation";
import { cls, getImageDelivelyURL } from "libs/client/utils";
import SolidHeart from "@components/svg/solidHeart";
import fav from "pages/api/products/[id]/fav";

interface IData {
  ok: boolean;
  product: IProduct;
  relatedProducts: Product[];
  isLiked: boolean;
}

interface IProduct extends Product {
  user: {
    name: string;
    id: number;
    avatar: string;
  };
}

const ItemDetail: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { data, mutate } = useSWR<IData>(id ? `/api/products/${id}` : null);
  const [setMutaion] = useMutation(`/api/products/${id}/fav`);

  const onFavClick = () => {
    setMutaion({});
    if (!data) return;
    mutate({ ...data, isLiked: !data?.isLiked }, false);
  };
  return (
    <Layout title="Item Detail" canGoBack>
      {data ? (
        <div className="px-5 py-5 space-y-3">
          {/* item description div */}
          <div className="space-y-3">
            {data.product.image ? (
              <img
                src={getImageDelivelyURL(data.product.image, "public")}
                alt="product"
                className="h-80 bg-slate-300 w-full"
              />
            ) : (
              <div className="h-80 bg-slate-300" />
            )}

            <Profile
              src={getImageDelivelyURL(data.product.user.avatar, "avatar")}
              view
              username={data.product?.user.name}
              userId={data.product?.userId}
            />
            <Item
              title={data.product?.name}
              price={data.product?.price}
              desc={data.product?.description}
            />
            <div className="mt-3 flex space-x-2 ">
              <Btn>Talk to Seller</Btn>
              <button
                onClick={onFavClick}
                className={cls(
                  `flex justify-center items-center  hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:rounded-sm`,
                  data.isLiked ? "text-amber-400" : "text-gray-500"
                )}
              >
                {data.isLiked ? (
                  <SolidHeart w="6" h="6" />
                ) : (
                  <HeartSVG w="6" h="6" />
                )}
              </button>
            </div>
          </div>
          {/* review */}
          <div className="border-t-[1px] pt-3 space-y-5">
            <SmProfile name="John" star msg="very good" />
            <SmProfile name="John" star msg="very good" />
            <SmProfile name="John" star msg="very good" />
          </div>
          {/* similar items */}
          <div className="border-t border-gray-300 pt-3">
            <H2 text="Similar Items" />
            <div className="mt-3 grid grid-cols-2 gap-4 md:grid-cols-4 sm:grid-cols-3">
              {data.relatedProducts.map((relatedProduct) => (
                <Link href={relatedProduct.id + ""} key={relatedProduct.id}>
                  <div>
                    <div className="w-full h-40 bg-gray-400 rounded-md mb-2" />
                    <div className="flex items-center justify-between space-x-2 ">
                      <h3 className="font-medium text-gray-800">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm rounded-md select-none bg-amber-400 p-1 text-white">
                        {relatedProduct.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </Layout>
  );
};

export default ItemDetail;
