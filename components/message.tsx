export default function MessageInput() {
  return (
    <div className="fixed rounded-t-md bottom-0 w-screen bg-amber-500 py-2 px-2">
      <div className="flex">
        <input
          type={"text"}
          className=" text-xs flex-1 rounded-md h-10 min-h-full focus:ring-1 focus:ring-amber-700 focus:ring-offset-2 focus:outline-none focus:border-amber-500 overflow-scroll border-amber-500 pl-8"
        />
        <div className="absolute top-[20px] left-4 cursor-pointer  hover:bg-amber-400 h-5 aspect-square bg-amber-200 rounded-full flex  items-center justify-center">
          <span className=" text-white ">&rarr;</span>
        </div>
      </div>
    </div>
  );
}
