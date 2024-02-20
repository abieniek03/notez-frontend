"use client";

import { UserButton } from "@clerk/nextjs";
import { BurgerMenu } from "./BurgerMenu";
import { NavLink } from "./Link";

const linksList: {
  label: string;
  path: string;
}[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Groups",
    path: "/groups", //logged
  },
  {
    label: "User panel",
    path: "/user_panel", //logged
  },
  {
    label: "Sign in",
    path: "/sign-in",
  },
  {
    label: "Sign up",
    path: "/sign-up",
  },
];

export function Navbar() {
  return (
    <>
      <ul className="hidden h-12 w-96 items-center justify-between rounded-3xl border-2 border-primary px-4 sm:flex">
        {linksList.map((e) => {
          return (
            <NavLink key={e.label} path={e.path}>
              {e.label}
            </NavLink>
          );
        })}
        <li>
          <UserButton afterSignOutUrl="/" />
        </li>
      </ul>
      <BurgerMenu />
    </>
  );
}
