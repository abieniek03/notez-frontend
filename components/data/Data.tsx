"use client";

import { useFoundGroupsContext } from "../../context/FoundGroups";
import { usePathname } from "next/navigation";
import { DataButtonsSection } from "./DataButtonsSection";

import { DataList } from "./DataList";
import { SearchBar } from "./SearchBar";

export function Data() {
  const pathname: string = usePathname();
  const { groupData } = useFoundGroupsContext();

  const getName = (): string => {
    if (pathname === "/groups") {
      return "Groups";
    } else {
      const group = groupData.find(
        (el: { id: string }) => el.id === pathname.slice(8),
      );
      return group
        ? group.name.length > 15
          ? group.name.slice(0, 14) + "..."
          : group.name
        : "";
    }
  };

  return (
    <div className="w-5/6 min-w-60 max-w-7xl lg:w-1/3 lg:min-w-[420px]">
      <SearchBar />
      <div className="">
        <div className="flex w-full items-center justify-between">
          <h1 className="font-bold">{getName()}</h1>
          <DataButtonsSection />
        </div>
        <main className="mt-6 max-h-[60vh] overflow-y-auto">
          <DataList />
        </main>
      </div>
    </div>
  );
}
