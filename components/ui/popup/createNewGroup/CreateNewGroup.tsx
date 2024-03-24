import React, { useState, ChangeEvent } from "react";
import { InputText } from "../../inputs/InputText";
import { ButtonMain } from "../../buttons/ButtonMain";
import { UserComponent } from "../../UserComponent";

interface Member {
  imageUrl?: string;
  emailAddress: string;
}

interface GroupData {
  name: string;
  members: Member[];
  admins: Member[];
  password: string;
}

export const CreateNewGroup: React.FC = () => {
  const [groupData, setGroupData] = useState<GroupData>({
    name: "",
    members: [
      {
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJjVVA0dmc4a0VTZnZWbmNtamo5Tm93dEdjNSJ9?width=80",
        emailAddress: "uzytkownik@test.com",
      },
      {
        emailAddress: "innyuser@test.com",
      },
    ],
    admins: [
      {
        imageUrl:
          "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJjVVA0dmc4a0VTZnZWbmNtamo5Tm93dEdjNSJ9?width=80",
        emailAddress: "uzytkownik@test.com",
      },
      {
        emailAddress: "innyuser@test.com",
      },
    ],
    password: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: keyof GroupData,
  ) => {
    const { value } = e.target;
    setGroupData({ ...groupData, [key]: value });
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold">Create new group</h1>

      <div>
        <h2>Group name</h2>
        <InputText
          onChange={(e) => handleInputChange(e, "name")}
          placeholder="Group name"
          value={groupData.name}
        />
      </div>

      <div>
        <h2>Members</h2>
        <p className="text-xs text-primary">
          You can modify members list any time
        </p>
        <div className="my-2 flex gap-2">
          {groupData.members.map((member, index) => (
            <div key={index}>
              <UserComponent photoOnly={true} userData={member} />
            </div>
          ))}
        </div>
        <ButtonMain>Add member</ButtonMain>
      </div>

      <div>
        <h2>Admins</h2>
        <p className="text-xs text-primary">
          You can modify admins list any time
        </p>
        <div className="my-2 flex gap-2">
          {groupData.admins.map((admin, index) => (
            <div key={index}>
              <UserComponent photoOnly={true} userData={admin} />
            </div>
          ))}
        </div>
        <ButtonMain>Add admin</ButtonMain>
      </div>

      <div>
        <h2>Set password</h2>
        <InputText
          onChange={(e) => handleInputChange(e, "password")}
          placeholder="Password"
          value={groupData.password}
        />
      </div>

      <ButtonMain onClick={() => console.log(groupData)}>Done</ButtonMain>
    </div>
  );
};
