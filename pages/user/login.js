import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/login", {
        email,
        password,
      });
      router.push("/");
    } catch (error) {
      console.error("Failed to login:", error.message);
      setMessage(error.message);
      setEmail("");
      setPassword("");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-200">
        <div className="flex bg-white shadow-xl">
          <form onSubmit={handleLogin} className="p-7">
            <div className="mb-20 flex items-center">
              <img src="/logo.jpg" alt="logo" className="h-9 w-9" />
              <span className="font-borel pt-3 text-lg font-semibold text-gray-700">
                KETI
              </span>
            </div>

            <div className="px-16">
              <div className="my-7">
                <h1 className="font-borel text-center text-5xl font-black">
                  Welcome back!
                </h1>
                <p className="text-center text-gray-500">
                  Empowering smart farms with advanced data visualization.
                </p>
              </div>

              <div>
                <span className="font-ubuntu">Email</span>
                <input
                  type="email"
                  autoComplete="email"
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
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full cursor-pointer rounded-md bg-black p-2 text-center text-white hover:bg-teal-500"
              >
                Login
              </button>

              {message != "" && (
                <p className="mt-4 text-center font-semibold text-red-500">
                  {message}
                </p>
              )}

              <div className="mb-5 mt-5 flex justify-between px-9">
                <span className="cursor-pointer text-sm font-medium hover:text-teal-500">
                  <Link href="/user/register">Sign Up</Link>
                </span>
                <span className="cursor-pointer text-sm font-medium hover:text-teal-500">
                  Forgot Password?
                </span>
              </div>
            </div>
          </form>

          <Image
            src="/login-image.jpg"
            alt="login"
            width={100}
            height={100}
            priority={true}
            className="hidden h-96 w-96 object-cover md:col-span-2 md:h-auto lg:block"
          />
        </div>
      </div>
    </>
  );
}
