import { Data } from "@/components/data/Data";
import { getFiles } from "libs/getFiles";
import { getGroups } from "libs/getGroups";

export default async function Page({
  params,
}: {
  params: { groupId: string };
}) {
  const groupData = await getGroups();
  const groupFiles = await getFiles();

  console.log(params);

  return (
    <div className="flex w-full justify-center">
      <Data groups={groupData} files={groupFiles} urlParam={params.groupId} />
    </div>
  );
}
