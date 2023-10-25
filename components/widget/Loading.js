import { PuffLoader } from "react-spinners";

export default function Loading() {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <PuffLoader color="#4fa94d" size={50} />
        <h1 className="font-comfortaa ml-1 mt-1 text-sm text-gray-700">
          Loading...
        </h1>
      </div>
    </>
  );
}
