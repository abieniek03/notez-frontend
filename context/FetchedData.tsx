"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { file, group } from "types/data";

interface props {
  children: ReactNode;
}

interface contextData {
  data: { group: group; files: file[] }[];
  setData: React.Dispatch<
    React.SetStateAction<{ group: group; files: file[] }[]>
  >;
}

export const FetchedDataContext = createContext<contextData>({} as contextData);

export const FetchedDataContextProvider = ({ children }: props) => {
  const [data, setData] = useState<{ group: group; files: file[] }[]>([]);

  return (
    <FetchedDataContext.Provider value={{ data, setData }}>
      {children}
    </FetchedDataContext.Provider>
  );
};

export const useFoundGroupsContext = (): contextData =>
  useContext(FetchedDataContext);
