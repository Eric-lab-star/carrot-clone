import Btn from "../../components/btn";
import Layout from "../../components/layout";
import VideoSVG from "../../components/svg/video";
export default function UploadStream() {
  return (
    <Layout title="Upload" canGoBack>
      <div className="py-6 px-2 w-full mx-auto max-w-md">
        <div className="w-full flex justify-center items-center">
          <label className="cursor-pointer mb-3 rounded-md h-40 w-full border-amber-300 border-2 border-dashed flex justify-center items-center text-amber-300 hover:bg-amber-500 hover:border-white transition-colors hover:text-white">
            <VideoSVG />
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
            className="resize-none text-xs h-28 max-h-28 min-h-full w-full focus:ouline-none focus:ring-transparent focus:border-amber-500 overflow-scroll"
            id="desc"
            placeholder="Please write product descriptions(price, brand, suggestion)."
          />
        </div>
        <Btn>Go Live</Btn>
      </div>
    </Layout>
  );
}
