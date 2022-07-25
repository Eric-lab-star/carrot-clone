export default function Btn({ SVG, children }: ILogin) {
  return (
    <button className="flex w-full justify-center items-center bg-amber-400 text-white rounded-md shadow-md py-1 border-amber-300 border focus:border-amber-500 focus:ring-amber-500 focus:ring-1 focus:outline-none">
      {SVG}
      {children}
    </button>
  );
}

interface ILogin {
  SVG?: React.ReactNode;
  children?: React.ReactNode;
}
