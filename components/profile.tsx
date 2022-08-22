import Link from "next/link";
import RightArr from "./svg/right";

export default function Profile({
  username,
  edit,
  view,
  userId,
  src,
}: IProfile) {
  return (
    <div className="flex space-x-3">
      {src ? (
        <img
          className={`h-12 aspect-square rounded-full bg-gray-200`}
          src={src}
          alt="profile"
        />
      ) : (
        <div className={`h-12 aspect-square rounded-full bg-gray-200`} />
      )}

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
          <div>
            {view && (
              <Link href={`/users/profile/${userId}`}>
                <a>View Profile</a>
              </Link>
            )}
          </div>
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
  userId?: number;
  src?: string;
}
