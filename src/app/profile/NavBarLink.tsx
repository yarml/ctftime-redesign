"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarLink({
  dest,
  label,
}: {
  dest: string;
  label: string;
}) {
  const pathname = usePathname();

  const current = pathname.toLowerCase().trim() === dest.toLowerCase().trim();

  return (
    <li>
      <Link
        href={dest}
        className="text-white hover:text-[#e3000b] transition-colors font-bold hover:scale-105"
        style={{
          color: current ? "#e3000b" : "",
        }}
      >
        {label}
      </Link>
    </li>
  );
}
