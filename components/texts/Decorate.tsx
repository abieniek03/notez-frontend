import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

export function Decorate({ children }: props) {
  return <h1 className="text-5xl font-bold text-primary">{children}</h1>;
}
