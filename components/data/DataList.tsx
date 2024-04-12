import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useFoundGroupsContext } from "../../context/FoundGroups";
import { useFoundFilesContext } from "../../context/FoundFiles";
import { useSearchDataContext } from "../../context/SearchParam";

import { DataListElement } from "./DataListElement";

import { groupAndData, file, group } from "types/data";

export function DataList() {
  const { groupData } = useFoundGroupsContext();
  const { fileData } = useFoundFilesContext();
  const { searchParams } = useSearchDataContext();

  const [presortData, setPresortData] = useState<groupAndData[]>([]);

  const pathname = usePathname();

  const filterByName = () => {
    if (searchParams.typedName == "") {
      return presortData;
    } else {
      return presortData.filter((el: groupAndData) =>
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
        a.createdAt > b.createdAt ? -1 : 1,
      );
    } else {
      return filterByName().sort((a, b) =>
        a.createdAt > b.createdAt ? 1 : -1,
      );
    }
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
      } else {
        return filterByName();
      }
    } else {
      return [];
    }
  };

  useEffect(() => {
    if (pathname === "/groups") {
      setPresortData(groupData);
    } else {
      const currentGroup = groupData.find((el) => el.id === pathname.slice(8));
      const files = (currentGroup?.files || [])
        .map((el) => fileData.find((file) => file.id === el))
        .filter(Boolean) as file[];
      setPresortData(files);
    }
  }, [groupData, fileData, pathname]);

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
