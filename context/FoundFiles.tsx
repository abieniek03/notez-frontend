"use client";
import { createContext, useContext, useState } from "react";

interface data {
  files: {
    id: string;
    name: string;
    type: "normal" | "shared";
    path: string;
    groupId: string[];
    createDate: Date;
  }[];
}

export const FoundFilesContext = createContext({});

export const FoundFIlesContextProvider = ({ children }: any) => {
  const [fileData, setFileData] = useState<data>({
    files: [
      {
        id: "erwojgc9ewmrcgmw9veprctm39",
        name: "File name",
        type: "normal",
        path: "/path",
        groupId: ["weferg4y55hetyhrge", "wefeeergthdfsy55hetyhrge"],
        createDate: new Date(),
      },
      {
        id: "[4puv c4o[wvm w4[m[0]]]]",
        name: "File name",
        type: "normal",
        path: "/path",
        groupId: ["wefeeergthdfsy55hetyhrge"],
        createDate: new Date(),
      },
      {
        id: "wvt4ium3w34w=3tu",
        name: "File name",
        type: "normal",
        path: "/path",
        groupId: ["weferg4y55hetyhrge"],
        createDate: new Date(),
      },
      {
        id: "2vhtn03tn0[32tvh3240][tn[w",
        name: "File name",
        type: "normal",
        path: "/path",
        groupId: ["weferg4y55hetyhrge", "weregthege55hetergehrge"],
        createDate: new Date(),
      },
      {
        id: "tunv4[n3wt[9w4yn[",
        name: "File name",
        type: "normal",
        path: "/path",
        groupId: ["weregthege55hetergehrge"],
        createDate: new Date(),
      },
      {
        id: "wqwegehjytgewthey5jtryjryuik7ryituyte",
        name: "File name",
        type: "normal",
        path: "/path",
        groupId: ["weregthege55hetergehrge"],
        createDate: new Date(),
      },
    ],
  });

  return (
    <FoundFilesContext.Provider value={{ fileData, setFileData }}>
      {children}
    </FoundFilesContext.Provider>
  );
};

export const useFoundFilesContext: any = () => useContext(FoundFilesContext);
