import Sidebar from "@/components/sidebar/Sidebar";
import { FoundGroupsContextProvider } from "context/FoundGroups";
import { FoundFilesContextProvider } from "context/FoundFiles";
import { testDataFiles } from "data/files";
import { testDataGroups } from "data/groups";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FoundGroupsContextProvider fetchedData={testDataGroups}>
      <FoundFilesContextProvider fetchedData={testDataFiles}>
        <Sidebar />
        {children}
      </FoundFilesContextProvider>
    </FoundGroupsContextProvider>
  );
}
