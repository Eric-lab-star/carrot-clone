const Counter = ({ SVG, text }: ICounter) => {
  return (
    <div className="flex space-x-1 justify-center items-center">
      {SVG}
      <span>{text}</span>
    </div>
  );
};

interface ICounter {
  SVG: React.ReactNode;
  text: string;
}

export default Counter;
