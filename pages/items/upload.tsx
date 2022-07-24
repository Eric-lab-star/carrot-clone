import type { NextPage } from "next";
import Layout from "../../components/layout";

const Upload: NextPage = () => {
  return (
    <Layout title="Upload" canGoBack>
      <div className="py-16 px-5">
        <div className="w-full flex justify-center items-center">
          <label className="cursor-pointer mb-3 rounded-md h-40 w-full border-amber-300 border-2 border-dashed flex justify-center items-center text-amber-300 hover:bg-amber-500 hover:border-white transition-colors hover:text-white">
            <svg
              className="h-16 w-16"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="file" className="hidden" />
          </label>
        </div>
        <div>
          <label className="cursor-pointer text-sm font-medium" htmlFor="name">
            Name
          </label>
          <div className="flex justify-start items-center rounded-md shadow-md bg-amber-400 text-amber-600 border-y-amber-300  ">
            <div className="py-1  pl-2 ">
              <span> </span>
            </div>
            <input
              id="name"
              type="text"
              placeholder="Please Write your name"
              className="py-1 px-1 flex-1 placeholder:text-amber-500  bg-amber-400 focus:outline-none focus:border-transparent border-transparent focus:ring-transparent"
            />
            <div className="py-1 px-2 ">
              <span> </span>
            </div>
          </div>
        </div>
        <div>
          <label className="cursor-pointer text-sm font-medium" htmlFor="price">
            Price
          </label>
          <div className="flex justify-start items-center rounded-md shadow-md bg-amber-400 text-amber-600">
            <div className="py-1  pl-2">
              <span>$</span>
            </div>
            <input
              id="price"
              type="text"
              placeholder="0.00"
              className="py-1 flex-1  text-amber-600 placeholder:text-amber-500 border-transparent px-1 bg-amber-400 focus:outline-none focus:border-transparent focus:ring-transparent"
            />
            <div className="py-1  px-2">
              <span>USD</span>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="text-sm font-medium cursor-pointer" htmlFor="desc">
            Description
          </label>

          <textarea
            rows={4}
            className="text-xs h-28 max-h-28 min-h-full w-full focus:ouline-none focus:ring-transparent focus:border-amber-500 overflow-scroll"
            id="desc"
            placeholder="Please write product descriptions(price, brand, suggestion)."
          />
        </div>
        <button className=" rounded-md  w-full py-1 bg-amber-400 text-amber-600 shadow-md mt-2">
          Upload product
        </button>
      </div>
    </Layout>
  );
};

export default Upload;
