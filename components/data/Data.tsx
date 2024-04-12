"use client";

import { useFoundGroupsContext } from "../../context/FoundGroups";
import { useFoundFilesContext } from "../../context/FoundFiles";
import { useSearchDataContext } from "../../context/SearchParam";
import { usePopupDataContext } from "../../context/PopupData";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { DataList } from "./DataList";
import { SearchBar } from "./SearchBar";
import { DataButtonsSection } from "./DataButtonsSection";
import { Popup } from "../ui/popup/Popup";
import { file, group } from "types/data";

interface props {
  groups: group[];
  files: file[];
  urlParam?: string;
}

export function Data({ groups, files, urlParam }: props) {
  const { groupData, setGroupData } = useFoundGroupsContext();
  const { fileData, setFileData } = useFoundFilesContext();

  useEffect(() => {
    setGroupData(groups);
    setFileData(files);
  }, [groupData, fileData]);

  const { popupData } = usePopupDataContext();
  const getName = () => {
    if (urlParam) {
      const foundGroup: group | undefined = groups.find(
        (el: group) => el.id === urlParam,
      );
      return foundGroup?.name || "Group Not Found";
    } else {
      return "Groups";
    }
  };

  if (getName() == "Group Not Found") {
    return (
      <div className="flex w-5/6 min-w-60 max-w-7xl justify-center lg:w-1/3 lg:min-w-[420px]">
        <h1 className="font-bold">{getName()}</h1>
      </div>
    );
  } else {
    return (
      <div className="w-5/6 min-w-60 max-w-7xl lg:w-1/3 lg:min-w-[420px]">
        {popupData.isVisible && <Popup />}
        <SearchBar />
        <div className="">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="font-bold">{getName()}</h1>
            </div>
            <DataButtonsSection />
          </div>
          <main className="mt-6 max-h-[60vh] overflow-y-auto">
            <DataList />
          </main>
        </div>
      </div>
    );
  }
}
