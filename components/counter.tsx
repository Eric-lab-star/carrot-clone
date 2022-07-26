const Counter = ({ SVG, text, className }: ICounter) => {
  return (
    <div className={`flex space-x-1 justify-center items-center ${className}`}>
      {SVG}
      <span>{text}</span>
    </div>
  );
};

interface ICounter {
  SVG: React.ReactNode;
  text: string;
  className?: string;
}

export default Counter;
