import { Sidebar } from "@/components/sidebar/Sidebar";

import { SearchDataContextProvider } from "context/SearchParam";
import { FoundGroupsContextProvider } from "context/FoundGroups";
import { FoundFilesContextProvider } from "context/FoundFiles";
import { FetchedDataContextProvider } from "context/FetchedData";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FetchedDataContextProvider>
      <FoundGroupsContextProvider>
        <FoundFilesContextProvider>
          <SearchDataContextProvider>
            <Sidebar />
            {children}
          </SearchDataContextProvider>
        </FoundFilesContextProvider>
      </FoundGroupsContextProvider>
    </FetchedDataContextProvider>
  );
}
