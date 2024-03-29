import { getGroups } from "data/getGroups";
import { getFiles } from "data/getFiles";

import { Group } from "./Group";

export async function Sidebar() {
  const groupData = await getGroups();
  const groupFiles = await getFiles();

  if (groupData.length == 0) {
    return (
      <div className="absolute bottom-0 left-0 z-10 hidden h-[80vh] w-80 rounded-t-xl bg-primary-darker p-6 lg:block">
        <h1 className="font-bold">Groups</h1>
        <h2>No groups</h2>
      </div>
    );
  } else {
    return (
      <div className="absolute bottom-0 left-0 z-10 hidden h-[80vh] w-80 rounded-t-xl bg-primary-darker p-6 lg:block">
        <h1 className="font-bold">Groups</h1>
        <div className="h-full overflow-y-auto">
          {groupData.map(
            (el: {
              id: string;
              name: string;
              photo?: string;
              members: string[];
              files?: string[];
              createDate: Date;
            }) => (
              <Group key={el.id} group={el} files={groupFiles} />
            ),
          )}
        </div>
      </div>
    );
  }
}
