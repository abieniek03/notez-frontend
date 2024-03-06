"use client";
import { ReactNode, createContext, useContext, useState } from "react";

import { file } from "types/data";

interface data {
  files: file[];
}

interface FoundFilesContextType {
  fileData: data;
  setFileData: React.Dispatch<React.SetStateAction<data>>;
}

export const FoundFilesContext = createContext<FoundFilesContextType>({
  fileData: { files: [] },
  setFileData: () => {},
});

export const FoundFIlesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [fileData, setFileData] = useState<data>({
    files: [
      {
        id: "erwojgc9ewmrcgmw9veprctm39",
        name: "File name",
        type: "normal",
        groupId: ["weferg4y55hetyhrge", "wefeeergthdfsy55hetyhrge"],
        createDate: new Date(),
      },
      {
        id: "[4puvc4owvmw4m0",
        name: "File name2",
        type: "normal",
        groupId: ["wefeeergthdfsy55hetyhrge"],
        createDate: new Date(),
      },
      {
        id: "wvt4ium3w34w=3tu",
        name: "File name3",
        type: "normal",
        groupId: ["weferg4y55hetyhrge"],
        createDate: new Date(),
      },
      {
        id: "2vhtn03tn0[32tvh3240][tn[w",
        name: "File name4",
        type: "normal",
        groupId: ["weferg4y55hetyhrge", "weregthege55hetergehrge"],
        createDate: new Date(),
      },
      {
        id: "tunv4[n3wt[9w4yn[",
        name: "File name5",
        type: "normal",
        groupId: ["weregthege55hetergehrge"],
        createDate: new Date(),
      },
      {
        id: "wqwegehjytgewthey5jtryjryuik7ryituyte",
        name: "File name6",
        type: "normal",
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

export const useFoundFilesContext = (): FoundFilesContextType =>
  useContext(FoundFilesContext);
