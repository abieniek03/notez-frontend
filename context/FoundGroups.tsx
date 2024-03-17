"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { group } from "types/data";

interface passedData {
  children: ReactNode;
  fetchedData: group[];
}

interface contextData {
  groupData: group[];
  setGroupData: React.Dispatch<React.SetStateAction<group[]>>;
}

export const FoundGroupsContext = createContext<contextData>({} as contextData);

export const FoundGroupsContextProvider = ({
  children,
  fetchedData,
}: passedData) => {
  const [groupData, setGroupData] = useState<group[]>(fetchedData);

  return (
    <FoundGroupsContext.Provider value={{ groupData, setGroupData }}>
      {children}
    </FoundGroupsContext.Provider>
  );
};

export const useFoundGroupsContext = (): contextData =>
  useContext(FoundGroupsContext);
