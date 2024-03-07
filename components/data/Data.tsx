"use client";

import { useFoundGroupsContext } from "context/FoundGroups";
import { usePathname } from "next/navigation";
import { DataButtonsSection } from "./DataButtonsSection";
import { DataList } from "./DataList";

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
      return group ? group.name : "";
    }
  };

  return (
    <div className="w-5/6 min-w-60 max-w-7xl lg:w-1/3 lg:min-w-[420px]">
      <div className="flex w-full items-center justify-between">
        <h1 className="font-bold">{getName()}</h1>
        <DataButtonsSection />
      </div>
      <main>
        <DataList />
      </main>
    </div>
  );
}
