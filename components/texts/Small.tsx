import { ReactNode } from "react";

interface props {
  children: ReactNode;
  isBold: boolean;
}

export function Small({ children, isBold }: props) {
  return (
    <>
      {isBold ? (
        <h4 className="text-xs font-bold">{children}</h4>
      ) : (
        <p className="text-xs font-normal">{children}</p>
      )}
    </>
  );
}
