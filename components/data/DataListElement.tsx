import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsThreeDotsVertical } from "react-icons/bs";

import { GroupAndData } from "types/data";

interface props {
  element: GroupAndData;
  background: boolean;
}

export function DataListElement({ element, background }: props) {
  return (
    <div
      className={`${background && "bg-primary-darker"} flex min-h-16 items-center justify-between px-4`}
    >
      <div className="flex">
        {element?.photo && (
          <div className="flex items-center justify-center ">
            <Image
              data-testid="group-photo"
              src={element?.photo}
              alt="Group image"
              width={50}
              height={50}
              className=" rounded-full p-2"
            />
          </div>
        )}
        <div className="flex flex-col justify-center">
          <Link href={`/groups/${element.id}`} className="hover:underline">
            {element.name}
          </Link>

          <div className="text-xs">
            {element?.members
              ? `Members: ${element.members.length}, ${element.createDate.toString().substr(7, 8)}`
              : `Author: , Upload date: ${element.createDate.toString().substr(7, 8)}`}
          </div>
        </div>
      </div>
      <button className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:bg-primary">
        <BsThreeDotsVertical />
      </button>
    </div>
  );
}
