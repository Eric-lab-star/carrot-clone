import { UseFormRegisterReturn } from "react-hook-form";

export default function Input({
  label,
  prefix,
  placeholder,
  suffix,
  register,
  type = "text",
  required,
}: IInputProps) {
  return (
    <div>
      <label className="cursor-pointer text-sm font-medium" htmlFor="name">
        {label}
      </label>
      <div className="flex justify-start items-center rounded-md shadow-md bg-amber-400 text-amber-600 border-y-amber-300  ">
        <div className="py-1  pl-2 ">
          <span>{prefix} </span>
        </div>
        <input
          {...register}
          id="name"
          type={type}
          required={required}
          placeholder={placeholder}
          className="py-1 px-1 flex-1 placeholder:text-amber-500  bg-amber-400 focus:outline-none focus:border-transparent border-transparent focus:ring-transparent"
        />
        <div className="py-1 px-2 ">
          <span>{suffix}</span>
        </div>
      </div>
    </div>
  );
}

interface IInputProps {
  label: string;
  prefix?: string;
  placeholder: string;
  suffix?: string;
  type?: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
}
