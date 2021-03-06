import Link from "next/link";
import RightArr from "./svg/right";

export default function Profile({ username, edit, view }: IProfile) {
  return (
    <div className="flex space-x-3">
      <div className={`h-12 aspect-square rounded-full bg-gray-200`} />
      <div>
        <p className="font-medium">{username}</p>
        <div className="flex justify-center items-center cursor-pointer hover:text-amber-500 text-xs text-gray-500">
          <div>
            {edit && (
              <Link href={"/profile/edit"}>
                <a>Edit Profile</a>
              </Link>
            )}
          </div>
          <div>{view && "View Profile"}</div>
          <RightArr />
        </div>
      </div>
    </div>
  );
}

interface IProfile {
  username: string;
  edit?: boolean;
  view?: boolean;
}
