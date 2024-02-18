import { ReactNode } from "react";

interface props {
  children: ReactNode;
  isBold: boolean;
}

export function Big({ children, isBold }: props) {
  return (
    <>
      {isBold ? (
        <h2 className="text-base font-bold">{children}</h2>
      ) : (
        <h3 className="text-base font-normal">{children}</h3>
      )}
    </>
  );
}
