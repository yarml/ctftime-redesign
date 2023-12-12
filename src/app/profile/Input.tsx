import { HTMLInputTypeAttribute } from "react";

export default function Input({
  id,
  type,
  placeholder,
  value,
}: {
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value?: string | number | readonly string[] | undefined;
}) {
  return (
    <input
      id={id}
      type={type}
      className="transition-all text-sm rounded-lg outline-none block w-full p-2.5 bg-stone-700 focus:bg-stone-600 focus:scale-105 placeholder-gray-400"
      placeholder={placeholder}
      value={value}
      required
    />
  );
}
