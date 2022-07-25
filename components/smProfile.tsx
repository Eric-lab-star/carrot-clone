export default function SmProfile({ title, desc }: ISmProfileProps) {
  return (
    <div className="flex justify-start space-x-2 items-start">
      <div className="w-8 h-8 rounded-full bg-gray-500" />
      <div>
        <h1 className="text-base leading-4">{title}</h1>
        <div className=" text-xs font-thin">{desc}</div>
      </div>
    </div>
  );
}

interface ISmProfileProps {
  title: string;
  desc: string;
}
