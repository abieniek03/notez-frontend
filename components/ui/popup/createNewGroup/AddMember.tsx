import { Dispatch, SetStateAction, useState } from "react";
import { InputText } from "../../inputs/InputText";
import { UserComponent } from "../../UserComponent";
import { ButtonMain } from "../../buttons/ButtonMain";
import { ButtonSquare } from "../../buttons/ButtonSquare";
import { IoSearchSharp } from "react-icons/io5";

export function AddMember() {
  const [username, setUsername] = useState<string>("");
  const [user, setUser] = useState<{}>();

  console.log(username);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold">Add new member</h1>

      <div>
        <h2>Group name</h2>
        <InputText
          onChange={(e) => setUsername(e.currentTarget.value)}
          placeholder="username"
          value={username}
        />
      </div>
    </div>
  );
}
