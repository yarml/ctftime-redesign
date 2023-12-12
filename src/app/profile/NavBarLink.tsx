"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarLink({
  dest,
  label,
  icon,
}: {
  dest: string;
  label: string;
  icon?: React.ReactNode;
}) {
  const pathname = usePathname();

  const current = pathname.toLowerCase().trim() === dest.toLowerCase().trim();

  return (
    <li>
      <Link
        href={dest}
        className="text-white hover:text-[#e3000b] transition-colors font-bold hover:scale-105 flex flex-row"
        style={{
          color: current ? "#e3000b" : "",
        }}
      >
        {!icon ? <></> : icon}
        {label}
      </Link>
    </li>
  );
}
