import React, { ReactNode } from "react";
export default function CircleBg({ SVG, text }: ICircleBg) {
  return (
    <div className="flex justify-center flex-col items-center space-y-1 hover:text-amber-400">
      <div className="hover:bg-amber-600 cursor-pointer h-9 aspect-square rounded-full bg-amber-500 text-white flex justify-center items-center">
        {SVG}
      </div>
      <span>{text}</span>
    </div>
  );
}

interface ICircleBg {
  SVG?: React.ReactNode;
  text?: string;
}
