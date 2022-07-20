import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/layout";

const Sold: NextPage = () => {
  return (
    <Layout title="Sold" canGoBack>
      <div className="grid grid-cols-1 py-10 lg:grid-cols-3 sm:grid-cols-2">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link key={i} href={`/items/${i}`}>
            <div className="flex justify-between border-b px-4 py-5 cursor-pointer ">
              <div className="flex space-x-3">
                <div className="w-20 h-20 bg-gray-500 rounded-md" />
                <div className="py-2 flex flex-col">
                  <h3 className="text-gray-900 text-sm font-medium">
                    New iPhone 14
                  </h3>
                  <span className="text-xs text-gray-500">Black</span>
                  <span className="font-medium mt-1 text-gray-900 ">$95</span>
                </div>
              </div>
              <div className="flex items-end jutify-end space-x-2">
                <div className="flex space-x-1 justify-center ite ms-center">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                  <span>1</span>
                </div>
                <div className="flex space-x-1 justify-center items-center">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  <span>1</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Sold;
