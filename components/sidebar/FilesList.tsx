"use client";

import { useFoundFilesContext } from "context/FoundFiles";
import Link from "next/link";
import { useState } from "react";

interface props {
  groupId: string;
}

export function FilesList({ groupId }: props) {
  const { fileData } = useFoundFilesContext();
  const [files, setFiles] = useState<any[]>(
    fileData.files.filter((file: any) => file.groupId.includes(groupId)),
  );
  return (
    <ul className="pl-13 flex flex-col pl-14">
      {files.map((el) => (
        <Link className="text-sm font-normal" key={el.id} href={el.path}>
          {el.name}
        </Link>
      ))}
    </ul>
  );
}
