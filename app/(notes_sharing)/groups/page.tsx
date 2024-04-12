import { Data } from "@/components/data/Data";
import { getFiles } from "libs/getFiles";
import { getGroups } from "libs/getGroups";
import { getUser } from "libs/getUser";
import { file, group } from "types/data";

export default async function Page() {
  const user = await getUser();
  const groupData: group[] = await getGroups();
  const groupFiles: file[] = await getFiles();

  return (
    <div className="flex w-full justify-center">
      <Data groups={groupData} files={groupFiles} />
    </div>
  );
}
