"use client";

import { auth } from "@clerk/nextjs";

import burgerMenu from "../../assets/burgerMenu.png";

import { BurgerMenu } from "./navbar_components/BurgerMenu";
import { NavLink } from "./navbar_components/Link";
import { MobileMenu } from "./navbar_components/MobileMenu";

import { useState } from "react";

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
    path: "/groups",
  },
  {
    label: "User panel",
    path: "/user_panel",
  },
];

export async function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { userId } = auth();
  console.log(userId);
  return (
    <>
      <ul className="hidden h-12 w-80 items-center justify-between rounded-3xl border-2 border-primary px-4 sm:flex">
        {linksList.map((e) => {
          return (
            <NavLink key={e.label} path={e.path}>
              {e.label}
            </NavLink>
          );
        })}
      </ul>
      <BurgerMenu
        image={burgerMenu}
        onClick={() => setIsMobileMenuOpen(() => !isMobileMenuOpen)}
      />
      {isMobileMenuOpen && <MobileMenu links={linksList} />}
    </>
  );
}
