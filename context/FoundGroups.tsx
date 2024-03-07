"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { group } from "types/data";

interface passedData {
  children: ReactNode;
  fetchedData: group[];
}

interface foundGroupsContextData {
  groupData: group[];
  setGroupData: React.Dispatch<React.SetStateAction<group[]>>;
}

export const FoundGroupsContext = createContext<foundGroupsContextData>(
  {} as foundGroupsContextData,
);

export const FoundGroupsContextProvider: React.FC<passedData> = ({
  children,
  fetchedData,
}) => {
  const [groupData, setGroupData] = useState<group[]>(fetchedData);

  return (
    <FoundGroupsContext.Provider value={{ groupData, setGroupData }}>
      {children}
    </FoundGroupsContext.Provider>
  );
};

export const useFoundGroupsContext = (): foundGroupsContextData =>
  useContext(FoundGroupsContext);
