import { NavLink } from "./Link";

interface props {
  links: {
    label: string;
    path: string;
  }[];
}

export function MobileMenu({ links }: props) {
  return (
    <div className="z-{998} absolute left-0 top-0 h-screen w-screen bg-background p-10 sm:hidden">
      <ul className="flex h-28 flex-col justify-between">
        {links.map((e: { label: string; path: string }) => {
          return (
            <NavLink key={e.label} path={e.path}>
              {e.label}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}
