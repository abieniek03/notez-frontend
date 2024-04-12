"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { FilesList } from "./FilesList";
import { useState } from "react";
import { file, group } from "types/data";

interface props {
  group: group;
  files: file[];
}

export function Group({ group, files }: props) {
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
        <div className="flex w-full items-center justify-between">
          <Link href={`/groups/${group.id}`} className="hover:underline">
            <h2 data-testid="group-name" className="font-bold">
              {group.name.length > 15
                ? group.name.slice(0, 14) + "..."
                : group.name}
            </h2>
          </Link>
          <button
            data-testid="group-btn"
            className="rounded-full p-2 transition-all duration-300 hover:bg-primary"
            onClick={() => setIsFileListOpen(!isFileListOpen)}
          >
            {isFileListOpen ? <IoIosArrowDown /> : <IoIosArrowBack />}
          </button>
        </div>
      </div>
      {isFileListOpen && <FilesList files={files} />}
    </div>
  );
}
