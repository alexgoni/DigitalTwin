export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-10 bg-black p-3 text-white shadow-xl">
        <div className="font-barlow mt-2 cursor-pointer text-center text-3xl font-semibold tracking-wide">
          KETI Project
        </div>

        <div className="flex flex-wrap items-center justify-between px-8 text-sm">
          <div className="flex space-x-10  text-teal-200">
            <div className="cursor-pointer hover:text-gray-300">Dashboard</div>
            <div className="cursor-pointer hover:text-gray-300">
              3D Visualization
            </div>
            <div className="cursor-pointer hover:text-gray-300">VR & AR</div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="cursor-pointer text-red-200 hover:text-gray-300">
              Admin
            </div>
            <div className="hidden cursor-pointer rounded-lg border border-white px-5 py-2 text-white hover:border-transparent hover:bg-white hover:text-teal-500 sm:inline-block">
              Login
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
