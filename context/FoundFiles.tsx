"use client";
import { ReactNode, createContext, useContext, useState } from "react";

import { file } from "types/data";

interface passedData {
  children: ReactNode;
  fetchedData: file[];
}

export const FoundFilesContext = createContext({});

export const FoundFilesContextProvider = ({
  children,
  fetchedData,
}: passedData) => {
  const [fileData, setFileData] = useState<file[]>(fetchedData);

  return (
    <FoundFilesContext.Provider value={{ fileData, setFileData }}>
      {children}
    </FoundFilesContext.Provider>
  );
};

export const useFoundFilesContext: any = () => useContext(FoundFilesContext);
