import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useFoundGroupsContext } from "context/FoundGroups";
import { useFoundFilesContext } from "context/FoundFiles";
import { useSearchDataContext } from "context/SearchParam";

import { DataListElement } from "./DataListElement";

import { GroupAndData, file } from "types/data";

export function DataList() {
  const { groupData } = useFoundGroupsContext();
  const { fileData } = useFoundFilesContext();
  const { searchParams } = useSearchDataContext();

  const [presortData, setPresortData] = useState<GroupAndData[]>([]);
  const pathname = usePathname();

  const filterByName = () => {
    if (searchParams.typedName == "") {
      return presortData;
    } else {
      return presortData.filter((el: GroupAndData) =>
        el.name.toLowerCase().includes(searchParams.typedName.toLowerCase()),
      );
    }
  };

  const sortAlphabetically = (alphabetically: boolean = true) => {
    if (alphabetically) {
      return filterByName().sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1,
      );
    } else {
      return filterByName().sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1,
      );
    }
  };

  const sortByTime = (theNewest: boolean = true) => {
    if (theNewest) {
      return filterByName().sort((a, b) =>
        a.createDate > b.createDate ? -1 : 1,
      );
    } else {
      return filterByName().sort((a, b) =>
        a.createDate > b.createDate ? 1 : -1,
      );
    }
  };

  const sortByMarkedByStar = () => {
    return filterByName().filter(
      (el: GroupAndData) => el.markedByStar === true,
    );
  };

  const dataToDisplay = () => {
    if (presortData.length > 0) {
      if (searchParams.fileName !== "") {
        return searchParams.fileName === "alphabetically"
          ? sortAlphabetically()
          : sortAlphabetically(false);
      } else if (searchParams.time !== "") {
        return searchParams.time === "the newest"
          ? sortByTime()
          : sortByTime(false);
      } else if (searchParams.markedByStar) {
        return sortByMarkedByStar();
      } else {
        return filterByName();
      }
    } else {
      return [];
    }
  };

  useEffect(() => {
    setPresortData(
      pathname === "/groups"
        ? groupData
        : fileData.filter((file: file) =>
            file.groupId.includes(pathname.slice(8)),
          ),
    );
  }, []);

  return (
    <div className="mt-4">
      {dataToDisplay().map((el, index) => (
        <DataListElement
          key={el.id}
          element={el}
          background={index % 2 === 0}
        />
      ))}
    </div>
  );
}
