import type { NextPage } from "next";
import Layout from "../../components/layout";

const ItemDetail: NextPage = () => {
  return (
    <Layout title="Item Detail">
      <div className="px-5 py-10">
        <div className="mb-4">
          <div className="h-80 bg-slate-300" />
          <div className="flex items-center space-x-3 py-2 border px-2">
            <div className="h-12 w-12 rounded-full bg-gray-200" />
            <div>
              <p className="font-medium">Steve Jebs</p>
              <p className="cursor-pointer hover:text-amber-500 text-xs text-gray-500">
                View profile &rarr;
              </p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="font-extrabold text-2xl">Galaxy S50</h1>
            <p className="text-xl font-bold">$140</p>
            <p className="text-base font-thin py-4 selection:bg-amber-300 selection:text-white">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex justify-between w-full space-x-2 ">
              <button className="flex-1 bg-amber-400 py-2 rounded-md hover:text-white hover:bg-amber-500 focus:ring-1 focus:outline-none focus:ring-offset-1 focus:ring-amber-400">
                Talk to seller
              </button>
              <button className="w-10 h-10 flex justify-center items-center text-gray-500 hover:text-amber-400 hover:bg-amber-200 hover:rounded-full rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-3">
          <h2 className="font-semibold text-2xl mb-2">Similar items</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="w-full h-40 bg-gray-400 rounded-md mb-2" />
                <div className="flex items-center justify-start space-x-2">
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
