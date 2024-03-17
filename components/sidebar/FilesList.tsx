"use client";

import { useFoundFilesContext } from "../../context/FoundFiles";
import Link from "next/link";
import { useState } from "react";

interface props {
  groupId: string;
}

export function FilesList({ groupId }: props) {
  const { fileData } = useFoundFilesContext();
  const [files, setFiles] = useState<any[]>(
    fileData.filter((file: any) => file.groupId.includes(groupId)),
  );
  return (
    <ul className="pl-13 flex flex-col pl-14">
      {files.map((el) => (
        <Link
          data-testid="file-link"
          className="text-sm font-normal hover:underline"
          key={el.id}
          href={`/file/${el.id}`}
        >
          {el.name.length > 15 ? el.name.slice(0, 20) + "..." : el.name}
        </Link>
      ))}
    </ul>
  );
}
