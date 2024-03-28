import { Dispatch, SetStateAction, useState } from "react";
import { InputText } from "../../inputs/InputText";
import { UserComponent } from "../../UserComponent";
import { ButtonMain } from "../../buttons/ButtonMain";
import { ButtonSquare } from "../../buttons/ButtonSquare";
import { IoSearchSharp } from "react-icons/io5";

interface Member {
  imageUrl?: string;
  emailAddress: string;
}

interface AddUserProps {
  userType: string;
  groupData: {
    name: string;
    members: Member[];
    admins: Member[];
    password: string;
  };
  setGroupData: Dispatch<
    SetStateAction<{
      name: string;
      members: Member[];
      admins: Member[];
      password: string;
    }>
  >;
  setModalType: Dispatch<SetStateAction<string>>;
}

export function AddUser({
  groupData,
  setGroupData,
  userType,
  setModalType,
}: AddUserProps) {
  const [usersList, setUsersList] = useState<Member[]>([]);
  const [user, setUser] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold">Add a {userType}</h1>

      <div>
        <h2>Find by email address</h2>
        <div className="flex">
          <InputText
            onChange={handleInputChange}
            placeholder="User email"
            value={user}
          />
          <ButtonSquare>
            <IoSearchSharp />
          </ButtonSquare>
        </div>
      </div>

      <div>
        <h2>List of users</h2>
        <div className="my-2 flex gap-2">
          {userType === "member"
            ? groupData.members.map((member, index) => (
                <div key={index}>
                  <UserComponent photoOnly={true} userData={member} />
                </div>
              ))
            : groupData.admins.map((admin, index) => (
                <div key={index}>
                  <UserComponent photoOnly={true} userData={admin} />
                </div>
              ))}
        </div>
      </div>

      <ButtonMain
        onClick={() => {
          setModalType("");
        }}
      >
        Done
      </ButtonMain>
    </div>
  );
}
