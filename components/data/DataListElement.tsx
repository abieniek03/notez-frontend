import Image from "next/image";
import Link from "next/link";

import { BsThreeDotsVertical } from "react-icons/bs";

import { GroupAndData } from "types/data";
import { FaRegStar } from "react-icons/fa";
import { usePopupDataContext } from "context/PopupData";

interface props {
  element: GroupAndData;
  background: boolean;
}

export function DataListElement({ element, background }: props) {
  const { popupData, setPopupData } = usePopupDataContext();
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
            {element.name.length > 25
              ? element.name.slice(0, 24) + "..."
              : element.name}
          </Link>

          <div className="flex gap-3 text-xs">
            {element.members
              ? `Members: ${element.members.length}, Created date: ${element.createDate.toString().substr(4, 11)}`
              : `Author: , Upload date: ${element.createDate.toString().substr(4, 11)}`}
            {element.markedByStar && <FaRegStar color="white" />}
          </div>
        </div>
      </div>
      <button className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:bg-primary">
        <BsThreeDotsVertical />
      </button>
    </div>
  );
}
