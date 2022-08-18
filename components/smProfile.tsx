import StarSVG from "./svg/star";

export default function SmProfile({
  name,
  time,
  star,
  msg,
  score,
}: ISmProfileProps) {
  return (
    <div className="flex space-x-2 ">
      <div className="w-9 h-9 rounded-full bg-gray-500" />
      <div className="w-10/12">
        <h1 className="text-base leading-4">{name}</h1>
        {time && <div className=" text-xs font-thin">{time}</div>}
        {star && score && (
          <div className="flex">
            {[1, 2, 3, 4, 5].map((v, i) => {
              return v <= score ? (
                <StarSVG key={v} color="text-yellow-400" />
              ) : (
                <StarSVG key={v} color="text-gray-400" />
              );
            })}
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
  time?: string;
  star?: boolean;
  msg?: string;
  score?: number;
}
