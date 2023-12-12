import Image from "next/image";
import NavBarLink from "./NavBarLink";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen min-h-[calc(100vh-3.4rem)] flex items-center justify-center">
      <main className="max-w-screen-xl p-4 bg-stone-900 w-1/2 rounded-xl">
        <section className="relative bg-stone-400 w-32 rounded-[50%] p-1 -translate-y-1/2 translate-x-5">
          <Image
            src="/yarml/pfp.jpg"
            width={128}
            height={128}
            alt="Profile Picture"
            className="flex items-center rounded-[50%]"
          />
        </section>
        <section className="flex flex-row items-stretch justify-start">
          <nav className="w-[20%]">
            <ul className="flex flex-col gap-4 px-2">
              <NavBarLink dest="/profile" label="General Information" />
              <NavBarLink dest="/profile/contact" label="Contact Information" />
              <NavBarLink dest="/profile/team" label="Team Information" />
            </ul>
          </nav>
          <div className="min-w-[2px] bg-[#e3000b] min-h-[100%] mx-2" />
          <section className="w-3/4">{children}</section>
        </section>
      </main>
    </div>
  );
}
