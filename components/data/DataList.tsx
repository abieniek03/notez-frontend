import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useFoundGroupsContext } from "context/FoundGroups";
import { useFoundFilesContext } from "context/FoundFiles";

import { DataListElement } from "./DataListElement";

import { GroupAndData, file } from "types/data";

export function DataList() {
  const { groupData } = useFoundGroupsContext();
  const { fileData } = useFoundFilesContext();
  const [usedContext, setUsedContext] = useState<GroupAndData[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    setUsedContext(
      pathname === "/groups"
        ? groupData.groups
        : fileData.files.filter((file: file) =>
            file.groupId.includes(pathname.slice(8)),
          ),
    );
  }, []);

  return (
    <div className="mt-4">
      {usedContext.map((el, index) => (
        <DataListElement
          key={el.id}
          element={el}
          background={index % 2 === 0}
        />
      ))}
    </div>
  );
}
