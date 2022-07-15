import type { NextPage } from "next";

const StreamDetail: NextPage = () => {
  return (
    <div className=" py-16 ">
      <div className="space-y-3 pt-3 pb-2 px-4">
        <div className="flex justify-center bg-slate-500 rounded-md">
          <div className=" w-full max-w-3xl aspect-video bg-slate-300 shadow-md " />
        </div>
        <div className="flex justify-start space-x-2 items-start">
          <div className="w-8 h-8 rounded-full bg-gray-500" />
          <div>
            <h1 className="text-base leading-4">Lets try something new</h1>
            <span className="text-xs font-thin">1시간 전</span>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="font-extrabold text-2xl">Galaxy S50</h1>
          <p className="text-xl font-bold">$140</p>
          <p className="text-base font-thin py-4 selection:bg-amber-300 selection:text-white">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
        </div>
      </div>
      <div className="px-4 max-h-96 overflow-y-scroll  overscroll-none">
        {[1, 1, 1, 1, 1, 1, 1].map((v, i) => {
          return (
            <div key={i}>
              <div className="text-gray-900 flex items-start space-x-2 w-1/3 max-w-fit bg-amber-400 shadow-md py-2 px-2 rounded-md">
                <div className="h-8 aspect-square rounded-full bg-gray-400" />
                <div className=" text-sm leading-4">
                  Hi how much are you selling them for?
                </div>
              </div>
              <div className="text-gray-900 relative h-10">
                <div className="flex absolute right-0 flex-row-reverse max-w-fit  items-start space-x-2 space-x-reverse w-1/3 bg-amber-400 shadow-md py-2 px-2 rounded-md">
                  <div className="h-8 aspect-square rounded-full bg-gray-400" />
                  <div className=" text-sm leading-4">I want 2000</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
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
    </div>
  );
};

export default StreamDetail;
