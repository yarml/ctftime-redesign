"use client";

import { LoginOutlined } from "@ant-design/icons";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

export default function Header() {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const username = searchParams.get("username");

  const isLoggedIn = username || pathname.includes("profile");

  return (
    <nav className="fixed w-screen h-[3.4rem] bg-stone-900 top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.svg" alt="Flowbite Logo" width={190} height={70} />
        </Link>
        <div className="block w-auto">
          <ul className="font-medium flex p-0 flex-row space-x-8 mt-0 ">
            <HeaderLink title="CTFs" destination="/ctfs" />
            <HeaderLink title="Upcoming" destination="/upcoming" />
            <HeaderLink title="Teams" destination="/teams" />
            <HeaderLink title="Contact" destination="/contact" />
            {!isLoggedIn ? (
              <HeaderLink
                title="Login"
                destination="/login"
                icon={<LoginOutlined />}
              />
            ) : (
              <HeaderLink
                title="Yarml"
                destination="/profile"
                icon={
                  <Image
                    src="/yarml/pfp.jpg"
                    width={24}
                    height={24}
                    alt="Profile Picture"
                    className="flex items-center rounded-[50%]"
                  />
                }
              />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function HeaderLink({
  title,
  destination,
  icon,
}: {
  title: string;
  destination: Url;
  icon?: ReactNode;
}) {
  return (
    <li>
      <Link
        href={destination}
        className="rounded text-white hover:text-[#e3000b] flex items-center transition-colors"
      >
        {icon ? <div className="pe-2 flex items-center">{icon}</div> : <></>}
        {title}
      </Link>
    </li>
  );
}
