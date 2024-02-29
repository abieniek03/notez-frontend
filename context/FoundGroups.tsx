"use client";
import { createContext, useContext, useState } from "react";

interface data {
  groups: {
    id: string;
    name: string;
    photo?: string;
    members: string[];
    files?: string[];
    createDate: Date;
  }[];
}

export const FoundGroupsContext = createContext({});

export const FoundGroupsContextProvider = ({ children }: any) => {
  const [groupData, setGroupData] = useState<data>({
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
        name: "Group name2",
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

export const useFoundGroupsContext: any = () => useContext(FoundGroupsContext);
