import Link from "next/link";

export function FilesList({ files }: any) {
  return (
    <ul className="pl-13 flex flex-col pl-14">
      {files.map((el: { id: string; name: string }) => (
        <Link
          data-testid="file-link"
          className="before:bg text-sm font-normal before:h-full before:w-1 before:content-[''] hover:underline"
          key={el.id}
          href={`/file/${el.id}`}
        >
          {el.name.length > 15 ? el.name.slice(0, 20) + "..." : el.name}
        </Link>
      ))}
    </ul>
  );
}
