"use client";

import Image from "next/image";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { FilesList } from "./FilesList";
import { useState } from "react";

interface props {
  group: {
    id: string;
    name: string;
    photo?: string;
    members: string[];
    createDate: Date;
  };
}

export default function Group({ group }: props) {
  const [isFileListOpen, setIsFileListOpen] = useState<boolean>(false);

  return (
    <div key={group.id} className="w-64">
      <div className="flex w-full items-center">
        {group.photo && (
          <Image
            src={group.photo}
            alt="Group image"
            width={50}
            height={50}
            className=" rounded-full p-2"
          />
        )}
        <div className="flex w-full justify-between">
          <h2 className="font-bold">{group.name}</h2>
          <button onClick={() => setIsFileListOpen(!isFileListOpen)}>
            {isFileListOpen ? <IoIosArrowDown /> : <IoIosArrowBack />}
          </button>
        </div>
      </div>
      {isFileListOpen && <FilesList groupId={group.id} />}
    </div>
  );
}
