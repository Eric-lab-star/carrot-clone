import CircleBg from "@components/circleBg";
import H2 from "@components/h2";
import Layout from "@components/layout";
import Profile from "@components/profile";
import SmProfile from "@components/smProfile";
import CartSVG from "@components/svg/cart";
import HeartSVG from "@components/svg/heart";
import ShoppingBagSVG from "@components/svg/shoppingBag";
import { Review, User } from "@prisma/client";
import useUser from "libs/client/useUser";
import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";

interface IReviews {
  ok: boolean;
  reviews: IWithCreatedByReview[];
}
interface IWithCreatedByReview extends Review {
  createdBy: {
    avatar: string;
    id: number;
    name: string;
  };
}

const ProfileHome: NextPage = () => {
  const { user } = useUser();
  const { data: reviewsApi } = useSWR<IReviews>("/api/users/reviews");
  return (
    <Layout title="Profile" hasTabBar>
      <div className="py-4 px-4 max-w-lg w-full mx-auto space-y-2">
        <Profile
          username={user ? user.name : "Loading.."}
          edit
          src={
            user?.avatar
              ? `https://imagedelivery.net/BRj20Xbg-lUinq49e-uUCw/${user?.avatar}/avatar`
              : ""
          }
        />
        <div className="flex justify-center items-center space-x-16">
          <Link href={"profile/sold"}>
            <a>
              <CircleBg SVG={<CartSVG />} text="판매내역" />
            </a>
          </Link>
          <Link href="profile/buy">
            <a>
              <CircleBg SVG={<ShoppingBagSVG />} text="구매내역" />
            </a>
          </Link>
          <Link href="profile/love">
            <a>
              <CircleBg SVG={<HeartSVG w="6" h="6" />} text="관심목록" />
            </a>
          </Link>
        </div>
        <div className="space-y-2">
          <H2 text="Comments" />
          {reviewsApi?.reviews?.map((review) => (
            <SmProfile
              key={review.id}
              name={review.createdBy.name}
              star
              score={review.score}
              msg={review.review}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProfileHome;
