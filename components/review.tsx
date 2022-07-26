import SmProfile from "./smProfile";

export default function Review({ username, star, msg }: IReview) {
  return (
    <div className="mt-2">
      <SmProfile title={username} star={star} />
      <div className="mt-2 text-sm">
        <p>{msg}</p>
      </div>
    </div>
  );
}
interface IReview {
  username: string;
  msg: string;
  star?: boolean;
}
