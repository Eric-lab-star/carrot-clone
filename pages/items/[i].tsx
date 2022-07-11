import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <div className="px-5 py-10">
      <div>
        <div className="h-80 bg-slate-300" />
        <div className="flex items-center space-x-3 py-2 border px-2">
          <div className="h-12 w-12 rounded-full bg-gray-200" />
          <div>
            <p className="font-medium">Steve Jebs</p>
            <p className="cursor-pointer hover:text-amber-500 text-xs text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className="mt-9">
          <h1 className="font-extrabold text-2xl">Galaxy S50</h1>
          <p className="text-xl font-bold">$140</p>
          <p className="font-thin py-4">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="flex justify-between w-full">
            <button>Talk to seller</button>
            <button>
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2>Similar items</h2>
        <div>
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div />
              <h3>Galaxy S60</h3>
              <p>$6</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
