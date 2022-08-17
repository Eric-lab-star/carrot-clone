import Counter from "./counter";
import CheckSVG from "./svg/check";
import CommentSVG from "./svg/comment";

export default function Question({
  category,
  question,
  check,
  comment,
  time,
  name,
  onWonderClick,
  isWondering,
}: IQuestionProp) {
  return (
    <div className="pt-2 hover:cursor-pointer">
      <span className="text-xs bg-amber-400 px-2 py-[0.5] text-white rounded-sm">
        {category}
      </span>
      <span className="flex justify-start text-lg items-center py-2">
        <span className="text-xl text-amber-400">Q.</span> {question}
      </span>
      <div className="text-xs text-gray-500 flex justify-between">
        <span>{name}</span>
        <span>{time}</span>
      </div>
      <div className="py-1 flex space-x-2">
        <Counter
          isWondering={isWondering}
          onClick={onWonderClick}
          className="text-sm"
          SVG={<CheckSVG />}
          text={`궁금해요 ${check}`}
        />
        <Counter
          className="text-sm"
          SVG={<CommentSVG w="4" h="4" />}
          text={`답변 ${comment}`}
        />
      </div>
    </div>
  );
}

interface IQuestionProp {
  category: string;
  question: string;
  name: string;
  time: string;
  check: number;
  comment: number;
  onWonderClick?: () => void;
  isWondering?: boolean;
}
