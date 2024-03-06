"use client";
import { useFoundGroupsContext } from "../../context/FoundGroups";
import Group from "./Group";

export default function Sidebar() {
  const { groupData } = useFoundGroupsContext();
  return (
    <div className="absolute bottom-0 left-0 hidden h-[80vh] overflow-y-auto rounded-t-xl bg-primary-darker p-6 lg:block">
      <h1 className="font-bold">Groups</h1>
      {groupData.groups.map(
        (el: {
          id: string;
          name: string;
          photo?: string;
          members: string[];
          files?: string[];
          createDate: Date;
        }) => (
          <Group key={el.id} group={el} />
        ),
      )}
    </div>
  );
}
