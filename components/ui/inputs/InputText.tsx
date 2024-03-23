import { ChangeEvent } from "react";

interface props {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  testId?: string;
}

export function InputText({
  placeholder = "",
  onChange,
  value = "",
  testId = "",
}: props) {
  return (
    <input
      className="w-full rounded-md border-2 border-content bg-background p-2 text-content focus:border-primary focus:text-primary focus:outline-none"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      data-testid={testId}
    />
  );
}
