export default function TextArea({ placeholder }: IPlaceholder) {
  return (
    <div className="mt-2">
      <label className="text-sm font-medium cursor-pointer" htmlFor="desc">
        Description
      </label>

      <textarea
        rows={4}
        className="resize-none text-xs h-28 w-full focus:ouline-none focus:ring-transparent focus:border-amber-500 overflow-scroll"
        id="desc"
        placeholder={placeholder}
      />
    </div>
  );
}

interface IPlaceholder {
  placeholder: string;
}
