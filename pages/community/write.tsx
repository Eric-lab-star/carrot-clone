import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <div className="py-16 px-4">
      <div className="mt-2">
        <label className="text-sm font-medium cursor-pointer" htmlFor="desc">
          Question.
        </label>

        <textarea
          rows={4}
          className="text-xs h-28 max-h-28 min-h-full w-full focus:ouline-none focus:ring-transparent focus:border-amber-500 overflow-scroll"
          id="desc"
          placeholder="Please write your description"
        />
        <button className=" rounded-md  w-full py-1 bg-amber-400 text-amber-600 shadow-md mt-2">
          Post
        </button>
      </div>
    </div>
  );
};

export default Write;
