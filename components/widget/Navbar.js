import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-10 w-full bg-black p-3 py-5 text-white shadow-xl">
        <div className="flex items-end justify-between">
          <div className="-mb-2 ml-4 cursor-pointer text-sm text-red-200 hover:text-gray-300">
            <Link href="/user/mypage">My Page</Link>
          </div>
          <div className="font-barlow cursor-pointer text-4xl font-semibold tracking-wide">
            KETI Project
          </div>
          <div className="-mb-2 mr-4 cursor-pointer rounded-md border border-white px-3 py-1 text-sm text-white hover:border-transparent hover:bg-white hover:text-teal-500 sm:inline-block">
            <Link href="/user/login">Login</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
