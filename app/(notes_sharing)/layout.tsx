import { Sidebar } from "@/components/sidebar/Sidebar";
import { SearchDataContextProvider } from "context/SearchParam";

import { FoundGroupsContextProvider } from "context/FoundGroups";
import { FoundFilesContextProvider } from "context/FoundFiles";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FoundGroupsContextProvider fetchedData={[]}>
      <FoundFilesContextProvider fetchedData={[]}>
        <SearchDataContextProvider>
          <Sidebar />
          {children}
        </SearchDataContextProvider>
      </FoundFilesContextProvider>
    </FoundGroupsContextProvider>
  );
}
