import Link from "next/link";
import { file } from "types/data";

interface Props {
  files: file[];
}

export function FilesList({ files }: Props) {
  console.log(files);
  return (
    <ul className="pl-13 flex flex-col pl-14">
      {files.map((file: file) => (
        <li key={file.id}>
          <Link className="hover:underline" href={`./file/${file.id}`}>
            {file.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
