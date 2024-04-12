import { group } from "types/data";
import { v4 as uuidv4 } from "uuid";

export const postGroup = async (data: {
  name: string;
  photo: string;
  invitePassword: string;
  members: string[];
  admins: string[];
}) => {
  const dataToPost: group = {
    id: uuidv4(),
    name: data.name,
    photo: data.photo,
    invitePassword: data.invitePassword,
    members: data.members,
    admins: data.admins,
    files: [],
    createdAt: Date.now().toString(),
    inviteUrl: "",
  };
  try {
    fetch("http://localhost:8000/groups", {
      method: "POST",
      body: JSON.stringify(dataToPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
