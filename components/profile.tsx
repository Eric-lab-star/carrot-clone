export default function Profile({ title, toUser }: IProfile) {
  return (
    <div className="flex space-x-3 py-2">
      <div className={`h-12 aspect-square rounded-full bg-gray-200`} />
      <div>
        <p className="font-medium">{title}</p>
        <div className="flex justify-center items-center cursor-pointer hover:text-amber-500 text-xs text-gray-500">
          <div>{toUser}</div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 pt-[1px] "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

interface IProfile {
  title: string;
  toUser?: string;
}
