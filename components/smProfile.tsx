import StarSVG from "./svg/star";

export default function SmProfile({ name, desc, star, msg }: ISmProfileProps) {
  return (
    <div className="flex space-x-2 ">
      <div className="w-9 h-9 rounded-full bg-gray-500" />
      <div className="w-10/12">
        <h1 className="text-base leading-4">{name}</h1>
        {desc && <div className=" text-xs font-thin">{desc}</div>}
        {star && (
          <div className="flex">
            <StarSVG color="text-yellow-400" />
            <StarSVG color="text-yellow-400" />
            <StarSVG color="text-yellow-400" />
            <StarSVG color="text-yellow-400" />
            <StarSVG color="text-gray-400" />
          </div>
        )}
        <div className="break-words text-sm">
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
}

interface ISmProfileProps {
  name: string;
  desc?: string;
  star?: boolean;
  msg?: string;
}
