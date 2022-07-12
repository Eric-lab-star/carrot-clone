import type { NextPage } from "next";
import Link from "next/link";

const Chats: NextPage = () => {
  return (
    <div className="py-16 divide-y-[1px] divide-amber-600">
      {[1, 2, 3, 4, 1, 2].map((v, i) => (
        <Link href={`chats/${i}`} key={i}>
          <div className="px-4 py-2 border-gray-400">
            <div className="flex items-start space-x-2">
              <div className="rounded-full h-7 w-7 bg-gray-300" />
              <div>
                <span className="text-sm mr-2">Steven Jobs</span>
                <span className="text-xs text-gray-300">2시간 전</span>
                <div className="text-sm">See you tmr !</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Chats;
