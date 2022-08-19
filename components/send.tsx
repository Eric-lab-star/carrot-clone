import Image from "next/image";
import profile from "../public/profile.jpg";
export default function Send({ text, avatar }: ISend) {
  return (
    <div className=" flex justify-end my-2">
      <div className="leading-4 max-w-[150px] sm:max-w-xs md:max-w-sm lg:max-w-xl p-2 text-sm font-light rounded-l-md break-words bg-red-500 ">
        {text}
      </div>
      <div className="bg-red-500 p-1 rounded-r-md">
        <div className="w-8 h-8 aspect-square rounded-full bg-slate-400 relative">
          <Image
            alt="profile"
            src={avatar ? avatar : profile}
            priority
            layout="fill"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

interface ISend {
  text: string;
  avatar?: string;
}
