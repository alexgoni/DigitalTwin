import Navbar from "@/components/widget/Navbar";
import { growthDuration } from "@/recoil/state";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function MyPage() {
  const [name, setName] = useState("");
  const [plant, setPlant] = useState("");
  const [duration, setDuration] = useRecoilState(growthDuration);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      name,
      plant,
      duration: duration / 1000,
      startTime: new Date(),
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    router.push("/");
  };

  return (
    <>
      <Navbar />
      <div className="mt-8 flex items-center justify-center">
        <div className="flex bg-slate-50 shadow-xl">
          <Image
            src="/register-image.jpg"
            alt="register"
            priority={true}
            width={1000}
            height={1000}
            className="hidden h-96 w-96 object-cover md:col-span-2 md:h-auto lg:block"
          />

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center p-7"
          >
            <div className="px-10">
              <div className="my-7">
                <h1 className="font-borel text-center text-6xl  font-black">
                  Setting
                </h1>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-ubuntu">이름</span>
                <input
                  type="text"
                  value={name}
                  className="h-9 rounded-sm border-2 border-b-4 border-black indent-2 focus:outline-none"
                  onChange={(e) => setName(e.currentTarget.value)}
                  required
                />
              </div>

              <div className="mt-2 flex items-center justify-between gap-12">
                <span className="font-ubuntu">작물</span>
                <input
                  type="text"
                  value={plant}
                  className="h-9 rounded-sm border-2 border-b-4 border-black indent-2 tracking-widest focus:outline-none"
                  onChange={(e) => setPlant(e.currentTarget.value)}
                  required
                />
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="font-ubuntu">생장기간</span>
                <input
                  type="number"
                  value={duration / 1000}
                  step="1"
                  min={1}
                  className="h-9  rounded-sm border-2 border-b-4 border-black indent-2 tracking-widest focus:outline-none"
                  onChange={(e) => setDuration(e.currentTarget.value * 1000)}
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full cursor-pointer rounded-md bg-black p-2 text-center text-white hover:bg-teal-500"
              >
                Start!
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
