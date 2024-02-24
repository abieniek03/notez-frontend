import Sidebar from "@/components/sidebar/Sidebar";
import { FoundGroupsContextProvider } from "context/FoundGroups";
import { FoundFIlesContextProvider } from "context/FoundFiles";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FoundGroupsContextProvider>
      <FoundFIlesContextProvider>
        <Sidebar />
        {children}
      </FoundFIlesContextProvider>
    </FoundGroupsContextProvider>
  );
}
