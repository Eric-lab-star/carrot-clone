import type { NextPage } from "next";
import CircleBg from "../../components/circleBg";
import H2 from "../../components/h2";
import Layout from "../../components/layout";
import Profile from "../../components/profile";
import Review from "../../components/review";
import SmProfile from "../../components/smProfile";
import CartSVG from "../../components/svg/cart";
import HeartSVG from "../../components/svg/heart";
import ShoppingBagSVG from "../../components/svg/shoppingBag";
import StarSVG from "../../components/svg/star";

const ProfileHome: NextPage = () => {
  return (
    <Layout title="Profile" hasTabBar>
      <div className="py-4 px-4 max-w-lg w-full mx-auto space-y-2">
        <Profile username="Steven Jobs" toUser="Edit Profile" />
        <div className="flex justify-center items-center space-x-16">
          <CircleBg SVG={<CartSVG />} text="판매내역" />
          <CircleBg SVG={<ShoppingBagSVG />} text="구매내역" />
          <CircleBg SVG={<HeartSVG w="6" h="6" />} text="관심목록" />
        </div>
        <div className="space-y-2">
          <H2 text="Comments" />
          <SmProfile
            name="Steven Jobs"
            star
            msg="Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit "
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProfileHome;
