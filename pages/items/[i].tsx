import type { NextPage } from "next";
import Layout from "../../components/layout";
import HeartSVG from "../../components/svg/heart";
import Btn from "../../components/btn";
import Profile from "../../components/profile";
import Product from "../../components/product";
import H2 from "../../components/h2";
import Review from "../../components/review";
import SmProfile from "../../components/smProfile";

const ItemDetail: NextPage = () => {
  return (
    <Layout title="Item Detail" canGoBack>
      <div className="px-5 py-5 space-y-3">
        {/* item description div */}
        <div className="space-y-3">
          <div className="h-80 bg-slate-300" />
          <Profile toUser="view profile" username="Mr.Kim" />
          <Product
            title="IPhone"
            price="149"
            desc="My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that ni**a Winston or anybody else is in there, you the first motherfucker to get shot. You understand?"
          />
          <div className="mt-3 flex space-x-2 ">
            <Btn>Talk to Seller</Btn>
            <button className="flex justify-center items-center text-gray-500 hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:rounded-sm">
              <HeartSVG w="6" h="6" />
            </button>
          </div>
        </div>
        {/* review */}
        <div className="border-t-[1px] pt-3 space-y-5">
          <SmProfile title="John" star msg="very good" />
          <SmProfile title="John" star msg="very good" />
          <SmProfile title="John" star msg="very good" />
        </div>
        {/* similar items */}
        <div className="border-t border-gray-300 pt-3">
          <H2 text="Similar Items" />
          <div className="mt-3 grid grid-cols-2 gap-4 md:grid-cols-4 sm:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="w-full h-40 bg-gray-400 rounded-md mb-2" />
                <div className="flex items-center justify-between space-x-2 ">
                  <h3 className="font-medium text-gray-800">Galaxy S60</h3>
                  <p className="text-sm rounded-md select-none bg-amber-400 p-1 text-white">
                    $6
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
