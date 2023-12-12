"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const canLogin = pwd.length > 0 && email.length > 0 && email.includes("@");

  return (
    <div className="w-screen max-h-[calc(100vh-3.4rem)] min-h-[calc(100vh-3.4rem)] flex justify-center items-center">
      <main className="rounded-lg bg-stone-900 p-16 font-bold flex flex-row items-start justify-start w-1/2">
        <section className="py-2 pe-4 border-stone-400 w-[90%] flex flex-col gap-4">
          <h1 className="text-3xl pb-10">Login With Your Email</h1>
          <form className="flex flex-col gap-5 p-2">
            <div className="flex flex-col">
              <label htmlFor="usr_email">Email</label>
              <input
                id="usr_email"
                type="email"
                className="transition-all text-sm rounded-lg outline-none block w-full p-2.5 bg-stone-700 focus:bg-stone-600 focus:scale-105 placeholder-gray-400"
                placeholder="example@ctftime.com"
                onChange={(ev) => setEmail(ev.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="usr_passwd">Password</label>
              <input
                id="usr_passwd"
                type="password"
                className="transition-all text-sm rounded-lg outline-none block w-full p-2.5 bg-stone-700 focus:bg-stone-600 focus:scale-105 placeholder-gray-400"
                placeholder="P*ssw0rd"
                onChange={(ev) => setPwd(ev.target.value)}
                required
              />
            </div>
            <div className="flex flex-row justify-end pt-5 font-semibold">
              <Link
                href={
                  canLogin
                    ? {
                        pathname: "/",
                        query: {
                          username: email.split("@")[0],
                        },
                      }
                    : "#"
                }
                className="transition-colors"
                style={{
                  color: !canLogin ? "rgb(120 113 108)" : "#e3000b",
                }}
              >
                Login
              </Link>
            </div>
          </form>
        </section>
        <section className="flex flex-col justify-center w-1/2 border-l-2 border-stone-400 px-2">
          <h1 className="text-3xl">OR</h1>
          <ThirdPartyLogin
            color="#ffffff"
            invert
            icon="/login/github.svg"
            provider="Github"
          />
          <ThirdPartyLogin
            color="#f14336"
            icon="/login/google.svg"
            provider="Google"
          />
          <ThirdPartyLogin
            color="#50abf1"
            icon="/login/twitter.svg"
            provider="Twitter"
          />
          <ThirdPartyLogin
            color="#3a559f"
            icon="/login/facebook.svg"
            provider="Facebook"
          />
        </section>
      </main>
    </div>
  );
}

function ThirdPartyLogin({
  provider,
  icon,
  invert,
  color,
}: {
  provider: string;
  icon: string;
  invert?: boolean;
  color: string;
}) {
  return (
    <button
      className="flex flex-row items-center justify-center m-4 rounded-xl border-2 p-4 px-2 hover:scale-105 transition-transform"
      style={{
        borderColor: color,
        color,
      }}
    >
      <Image
        src={icon}
        alt={provider}
        width={24}
        height={24}
        className="relative left-[2px] flex justify-center items-center me-4 rounded-[50%]"
        style={{
          filter: invert ? "invert()" : "",
        }}
      />{" "}
      Login In With {provider}
    </button>
  );
}
