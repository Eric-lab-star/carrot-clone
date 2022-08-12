import { UseFormRegisterReturn } from "react-hook-form";

export default function TextArea({
  register,
  placeholder,
  label,
  required = true,
}: IPlaceholder) {
  return (
    <div className="mt-2">
      <label className="text-sm font-medium cursor-pointer" htmlFor="desc">
        {label}
      </label>

      <textarea
        required={required}
        {...register}
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
  label: string;
  register: UseFormRegisterReturn;
  required: boolean;
}
