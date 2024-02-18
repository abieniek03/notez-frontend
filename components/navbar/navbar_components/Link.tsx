"use client";
import { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface props {
  children: ReactNode;
  path: string;
}

//{`${font.className} flex flex-col items-center bg-background text-content`}

export function NavLink({ children, path }: props) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <li>
      <Link
        href={path}
        className={`${path == pathname && "text-primary"} text-xs font-bold transition-all duration-300 hover:text-primary`}
      >
        {children}
      </Link>
    </li>
  );
}
