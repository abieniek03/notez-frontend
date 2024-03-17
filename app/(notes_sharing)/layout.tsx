"use client";

import { Sidebar } from "@/components/sidebar/Sidebar";

import { FoundGroupsContextProvider } from "context/FoundGroups";
import { FoundFilesContextProvider } from "context/FoundFiles";
import { SearchDataContextProvider } from "context/SearchParam";

import { testDataFiles } from "data/files";
import { testDataGroups } from "data/groups";

import { usePopupDataContext } from "context/PopupData";

import { Popup } from "@/components/ui/popup/Popup";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { popupData } = usePopupDataContext();

  console.log(popupData);

  return (
    <FoundGroupsContextProvider fetchedData={testDataGroups}>
      <FoundFilesContextProvider fetchedData={testDataFiles}>
        <SearchDataContextProvider>
          {popupData.isVisible && <Popup />}

          <Sidebar />
          {children}
        </SearchDataContextProvider>
      </FoundFilesContextProvider>
    </FoundGroupsContextProvider>
  );
}
