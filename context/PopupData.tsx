"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { popupData } from "types/popupData";

interface contextData {
  popupData: popupData;
  setPopupData: React.Dispatch<React.SetStateAction<popupData>>;
}

export const PopupDataContext = createContext<contextData>({} as contextData);

export const PopupDataContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [popupData, setPopupData] = useState<popupData>({
    isVisible: false,
    children: <></>,
  });

  return (
    <PopupDataContext.Provider value={{ popupData, setPopupData }}>
      {children}
    </PopupDataContext.Provider>
  );
};

export const usePopupDataContext = (): contextData =>
  useContext(PopupDataContext);
