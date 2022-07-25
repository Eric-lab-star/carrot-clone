import Image from "next/image";
import profile from "../public/profile.jpg";
export default function Received({ text }: IReceived) {
  return (
    <div className="my-2 flex">
      <div className="bg-amber-500 p-1 rounded-l-md">
        <div className="w-8 h-8 aspect-square rounded-full relative bg-slate-400">
          <Image
            src={profile}
            layout="fill"
            className="rounded-full"
            alt="profile"
            priority
          />
        </div>
      </div>
      <div className="leading-4 p-1 text-sm font-light rounded-r-md max-w-[150px] sm:max-w-xs  md:max-w-sm lg:max-w-lg break-words bg-amber-500">
        {text}
      </div>
    </div>
  );
}

interface IReceived {
  text: string;
}
