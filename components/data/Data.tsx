import { ButtonMain } from "../ui/buttons/ButtonMain";
import { ReactNode } from "react";

interface props {
  label: string;
  buttons: { children: ReactNode; onClick?: () => void; loading?: boolean }[];
}

export function Data({ label, buttons }: props) {
  return (
    <div>
      <div>
        <h1>{label}</h1>
        <div>
          {buttons.map((el) => (
            <ButtonMain onClick={el.onClick}>{el.children}</ButtonMain>
          ))}
        </div>
      </div>
    </div>
  );
}
