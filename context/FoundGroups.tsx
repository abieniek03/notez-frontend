"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

import { group } from "types/data";

interface Data {
  groups: group[];
}

interface FoundGroupsContextType {
  groupData: Data;
  setGroupData: React.Dispatch<React.SetStateAction<Data>>;
}

const FoundGroupsContext = createContext<FoundGroupsContextType>({
  groupData: { groups: [] },
  setGroupData: () => {},
});

export const FoundGroupsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [groupData, setGroupData] = useState<Data>({
    groups: [
      {
        id: "weferg4y55hetyhrge",
        name: "Group name",
        photo: "/test.jpeg",
        members: ["2334feww", "234243"],
        files: ["wefwefgew", "wfweeefw"],
        createDate: new Date(),
      },
      {
        id: "wefeeergthdfsy55hetyhrge",
        name: "Group name2",
        photo: "/test.jpeg",
        members: ["2334feww", "234243"],
        files: ["wefwefgew", "wfweeefw"],
        createDate: new Date(),
      },
      {
        id: "weregthege55hetergehrge",
        name: "Group name3",
        photo: "/test.jpeg",
        members: ["2334feww", "234243"],
        files: ["wefwefgew", "wfweeefw"],
        createDate: new Date(),
      },
    ],
  });

  return (
    <FoundGroupsContext.Provider value={{ groupData, setGroupData }}>
      {children}
    </FoundGroupsContext.Provider>
  );
};

export const useFoundGroupsContext = (): FoundGroupsContextType =>
  useContext(FoundGroupsContext);
