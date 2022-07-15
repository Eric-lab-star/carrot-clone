export default function UploadStream() {
  return (
    <div className="py-16 px-5">
      <div className="w-full flex justify-center items-center">
        <label className="cursor-pointer mb-3 rounded-md h-40 w-full border-amber-300 border-2 border-dashed flex justify-center items-center text-amber-300 hover:bg-amber-500 hover:border-white transition-colors hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <input type="file" className="hidden" />
        </label>
      </div>
      <div>
        <label className="cursor-pointer text-sm font-medium" htmlFor="name">
          Title
        </label>
        <div className="flex justify-start items-center rounded-md shadow-md bg-amber-400 text-amber-600 border-y-amber-300  ">
          <div className="py-1  pl-2 ">
            <span> </span>
          </div>
          <input
            id="name"
            type="text"
            placeholder="Title"
            className="py-1 px-1 flex-1 placeholder:text-amber-500  bg-amber-400 focus:outline-none focus:border-transparent border-transparent focus:ring-transparent"
          />
          <div className="py-1 px-2 ">
            <span> </span>
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
        Upload Video
      </button>
    </div>
  );
}
