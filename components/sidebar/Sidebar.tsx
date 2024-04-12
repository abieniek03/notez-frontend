import { getGroups } from "libs/getGroups";
import { getFiles } from "libs/getFiles";

import { Group } from "./Group";
import { file, group } from "types/data";

export async function Sidebar() {
  const groupData = await getGroups();
  const groupFiles = await getFiles();

  const returnListOfFiles = (idList: string[]) => {
    return idList
      .map((id: string) => groupFiles.find((file: file) => file.id === id))
      .filter(Boolean) as file[];
  };

  return (
    <div className="absolute bottom-0 left-0 z-10 hidden h-[80vh] w-80 rounded-t-xl bg-primary-darker p-6 lg:block">
      <h1 className="font-bold">Groups</h1>
      {groupData.length === 0 ? (
        <div>
          <h2>No groups</h2>
        </div>
      ) : (
        <div className="h-full overflow-y-auto">
          {groupData.map((el: group) => (
            <Group key={el.id} group={el} files={returnListOfFiles(el.files)} />
          ))}
        </div>
      )}
    </div>
  );
}
