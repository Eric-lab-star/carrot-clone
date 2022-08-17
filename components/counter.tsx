const Counter = ({ SVG, text, className, onClick, isWondering }: ICounter) => {
  return (
    <div
      onClick={onClick}
      className={`flex space-x-1 justify-center items-center ${className} ${
        isWondering ? "text-red-500" : ""
      }`}
    >
      {SVG}
      <span>{text}</span>
    </div>
  );
};

interface ICounter {
  SVG: React.ReactNode;
  text: string;
  className?: string;
  onClick?: () => void;
  isWondering?: boolean;
}

export default Counter;
