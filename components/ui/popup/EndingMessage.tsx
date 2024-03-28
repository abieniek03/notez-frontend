import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface props {
  endedWithSuccess: boolean;
}

export function EndingMessage({ endedWithSuccess }: props) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div
        className={`flex h-40 w-40 items-center justify-center rounded-full border-8 text-6xl ${endedWithSuccess ? "border-green-500 text-green-500" : "border-red-500 text-red-500"}`}
      >
        {endedWithSuccess ? <FaCheck /> : <IoClose />}
      </div>
      <h1 className="font-bold">
        {endedWithSuccess
          ? "Action completed successfully!"
          : "Action completed in failure!"}
      </h1>
    </div>
  );
}
