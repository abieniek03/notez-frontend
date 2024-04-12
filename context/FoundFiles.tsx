"use client";
import { ReactNode, createContext, useContext, useState } from "react";

import { file } from "types/data";

interface props {
  children: ReactNode;
}

interface contextData {
  fileData: file[];
  setFileData: React.Dispatch<React.SetStateAction<file[]>>;
}

export const FoundFilesContext = createContext<contextData>({} as contextData);

export const FoundFilesContextProvider = ({ children }: props) => {
  const [fileData, setFileData] = useState<file[]>([]);

  return (
    <FoundFilesContext.Provider value={{ fileData, setFileData }}>
      {children}
    </FoundFilesContext.Provider>
  );
};

export const useFoundFilesContext = (): contextData =>
  useContext(FoundFilesContext);
