import { ChangeEvent } from "react";

interface props {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  checked: boolean;
}

export function Radio({
  label = "",
  onChange,
  value = "",
  checked = false,
}: props) {
  return (
    <div className="flex items-center">
      <input
        className="mr-2 h-3.5 w-3.5 rounded-full accent-primary"
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        id={value}
      />
      <label className="text-xs" htmlFor={value}>
        {label}
      </label>
    </div>
  );
}
