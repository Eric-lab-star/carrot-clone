import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export default function UploadField({
  SVG,
  register,
}: {
  SVG: React.ReactNode;
  register?: UseFormRegisterReturn;
}) {
  return (
    <label className="cursor-pointer mb-3 rounded-md h-40 w-full border-amber-300 border-2 border-dashed flex justify-center items-center text-amber-300 hover:bg-amber-500 hover:border-white transition-colors hover:text-white">
      {SVG}
      <input {...register} type="file" accept="image/*" className="hidden" />
    </label>
  );
}
