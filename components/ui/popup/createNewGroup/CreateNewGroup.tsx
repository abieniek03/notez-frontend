"use client";

import { useState, ChangeEvent } from "react";
import { InputText } from "../../inputs/InputText";
import { ButtonMain } from "../../buttons/ButtonMain";
import { UserComponent } from "../../UserComponent";
import { AddMember } from "./AddMember";
import { usePopupDataContext } from "context/PopupData";
import { EndingMessage } from "../EndingMessage";

import { postGroup } from "libs/postGroup";

interface Member {
  imageUrl?: string;
  emailAddress: string;
}

interface GroupData {
  name: string;
  photo: string;
  invitePassword: string;
  members: string[];
  admins: string[];
}

export function CreateNewGroup() {
  const { popupData, setPopupData } = usePopupDataContext();

  const [modalType, setModalType] = useState<string>("");
  const [groupData, setGroupData] = useState<GroupData>({
    name: "",
    photo: "",
    members: ["uzytkownik@test.com", "innyuser@test.com"],
    admins: ["uzytkownik@test.com", "innyuser@test.com"],
    invitePassword: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: keyof GroupData,
  ) => {
    const { value } = e.target;
    setGroupData({ ...groupData, [key]: value });
  };

  if (modalType !== "") {
    return <AddMember />;
  } else {
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
          <h2>Group photo</h2>
          <input
            type="file"
            placeholder="Group name"
            value={groupData.photo}
            onChange={(e) => handleInputChange(e, "photo")}
            className="text-xs font-bold file:min-h-10 file:min-w-28 file:rounded-lg file:border-0 file:bg-primary file:text-white"
          />
        </div>

        <div>
          <h2>Members</h2>
          <p className="text-xs text-primary">
            You can modify members list any time
          </p>
          <div className="my-2 flex gap-2">
            {groupData.members.map((userId, index) => (
              <div key={index}>
                <UserComponent photoOnly={true} userId={userId} />
              </div>
            ))}
          </div>
          <ButtonMain onClick={() => setModalType("member")}>
            Add member
          </ButtonMain>
        </div>

        <div>
          <h2>Admins</h2>
          <p className="text-xs text-primary">
            You can modify admins list any time
          </p>
          <div className="my-2 flex gap-2">
            {/* {groupData.admins.map((admin, index) => (
              <div key={index}>
                <UserComponent photoOnly={true} userData={admin} />
              </div>
            ))} */}
          </div>
          <ButtonMain onClick={() => setModalType("admin")}>
            Add admin
          </ButtonMain>
        </div>

        <div>
          <h2>Set password</h2>
          <InputText
            onChange={(e) => handleInputChange(e, "invitePassword")}
            placeholder="Password"
            value={groupData.invitePassword}
          />
        </div>

        <ButtonMain
          onClick={() => {
            console.log(groupData);
          }}
        >
          Create
        </ButtonMain>
      </div>
    );
  }
}
