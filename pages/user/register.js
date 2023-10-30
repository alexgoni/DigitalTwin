import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPW] = useState("");
  const [PWConfirm, setPWConfirm] = useState("");
  const router = useRouter();

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-200">
        <div className="flex bg-white shadow-xl">
          <Image
            src="/register-image.jpg"
            alt="register"
            priority={true}
            width={1000}
            height={1000}
            className="hidden h-96 w-96 object-cover md:col-span-2 md:h-auto lg:block"
          />

          <form className="p-7">
            <div className="mb-20 flex items-center">
              <Image
                src="/logo.jpg"
                width={100}
                height={100}
                alt="logo"
                className="h-9 w-9"
              />
              <span className="font-borel pt-3 text-lg font-semibold text-gray-700">
                KETI
              </span>
            </div>

            <div className="px-16">
              <div className="my-7">
                <h1 className="font-borel text-center text-5xl  font-black">
                  Register
                </h1>
                <p className="text-center text-gray-500">
                  Thank you for joining us!
                </p>
              </div>

              <div>
                <span className="font-ubuntu">Email</span>
                <input
                  type="email"
                  value={email}
                  className="h-9 w-full rounded-sm border-2 border-b-4 border-black indent-2 focus:outline-none"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                />
              </div>

              <div className="mt-2">
                <span className="font-ubuntu">Password</span>
                <input
                  type="password"
                  value={password}
                  className="h-9 w-full rounded-sm border-2 border-b-4 border-black indent-2 tracking-widest focus:outline-none"
                  placeholder="********"
                  onChange={(e) => setPW(e.currentTarget.value)}
                  required
                />
              </div>

              <div className="mt-2">
                <span className="font-ubuntu">Confirm PW</span>
                <input
                  type="password"
                  value={PWConfirm}
                  className="h-9 w-full rounded-sm border-2 border-b-4 border-black indent-2 tracking-widest focus:outline-none"
                  placeholder="********"
                  onChange={(e) => setPWConfirm(e.currentTarget.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full cursor-pointer rounded-md bg-black p-2 text-center text-white hover:bg-teal-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
