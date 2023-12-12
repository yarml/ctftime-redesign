import { CrownFilled, CrownOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

type TeamInfo = {
  icon: string;
  name: string;
  countryFlag: string;
  country: string;
  points: number;
  capturedFlags: number;
  totalFlags: number;
};

export default function Home({
  searchParams: { username },
}: {
  searchParams: {
    username?: string;
  };
}) {
  return (
    <div className="max-w-screen-lg w-full h-full flex items-center justify-between mx-auto px-4 pt-24 pb-12 flex-col gap-10">
      <Article
        title="HTB University CTF Just Concluded!"
        href="/events/13336"
        date="Dec. 10, 2023 09:00PM WET"
        imgUrl="/htb_unictf.jpg"
        top3Teams={[
          {
            icon: "/unictf/ensibs.png",
            name: "GCC-ENSBIS",
            country: "FR",
            countryFlag: "https://flagcdn.com/w160/fr.png",
            points: 7950,
            capturedFlags: 22,
            totalFlags: 22,
          },
          {
            icon: "/unictf/esna.jpg",
            name: "ESNA",
            country: "FR",
            countryFlag: "https://flagcdn.com/w160/fr.png",
            points: 7950,
            capturedFlags: 22,
            totalFlags: 22,
          },
          {
            icon: "/unictf/phreaks.png",
            name: "Phreaks 2600",
            country: "FR",
            countryFlag: "https://flagcdn.com/w160/fr.png",
            points: 7525,
            capturedFlags: 21,
            totalFlags: 22,
          },
        ]}
      />
      <Article
        title="HTB University CTF Just Concluded!"
        href="/events/13336"
        date="Dec. 10, 2023 09:00PM WET"
        imgUrl="/htb_unictf.jpg"
        top3Teams={[
          {
            icon: "/unictf/ensibs.png",
            name: "GCC-ENSBIS",
            country: "FR",
            countryFlag: "https://flagcdn.com/w160/fr.png",
            points: 7950,
            capturedFlags: 22,
            totalFlags: 22,
          },
          {
            icon: "/unictf/esna.jpg",
            name: "ESNA",
            country: "FR",
            countryFlag: "https://flagcdn.com/w160/fr.png",
            points: 7950,
            capturedFlags: 22,
            totalFlags: 22,
          },
          {
            icon: "/unictf/phreaks.png",
            name: "Phreaks 2600",
            country: "FR",
            countryFlag: "https://flagcdn.com/w160/fr.png",
            points: 7525,
            capturedFlags: 21,
            totalFlags: 22,
          },
        ]}
      />
    </div>
  );
}

function Article({
  title,
  href,
  date,
  imgUrl,
  top3Teams,
}: {
  title: string;
  href: string;
  date: string;
  imgUrl: string;
  top3Teams?: TeamInfo[];
}) {
  return (
    <Link href={href}>
      <article className="flex flex-col bg-stone-700 p-4 pb-8 rounded-md hover:scale-105 transition-transform">
        <h1 className="text-5xl pb-1">{title}</h1>
        <h4 className="text-xs self-end pb-4">{date}</h4>
        <Image
          src={imgUrl}
          alt="HTB UniCTF Image"
          width={400}
          height={400}
          className="rounded-md w-full mb-20"
        />
        {!top3Teams ? (
          <></>
        ) : (
          <section className="flex flex-row justify-center pt-5 mx-auto">
            <TeamFlag position={2} team={top3Teams[1]}></TeamFlag>
            <TeamFlag position={1} team={top3Teams[0]}></TeamFlag>
            <TeamFlag position={3} team={top3Teams[2]}></TeamFlag>
          </section>
        )}
      </article>
    </Link>
  );
}

function TeamFlag({ position, team }: { position: number; team: TeamInfo }) {
  return (
    <div
      className="p-4 pb-0 min-w-[15rem] mr-5 player-wrapper z-10"
      style={{
        transform: position !== 1 ? "" : "translateY(-40px)",
      }}
    >
      <div className="relative flex -top-10 justify-center w-full items-center">
        <div className="bg-[#e3000b] w-12 h-12 rounded text-center flex items-center justify-center">
          <div className="text-gray-300 text-xl flex items-center justify-center">
            {position === 1 ? <CrownFilled /> : position}
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center">
        <Image
          src={team.icon}
          alt={team.name}
          width={80}
          height={80}
          className="w-20 rounded-[50%]"
        />
      </section>
      <section>
        <div className="flex flex-row justify-around pt-12 w-full text-stone-200">
          <h3 className="flex flex-row items-center">
            <Image
              src={team.countryFlag}
              alt={team.countryFlag}
              width={16}
              height={16}
              className="flex items-center me-2"
            />
            {team.country}
          </h3>
          <h3>{team.points} pts</h3>
        </div>
      </section>
      <section className="flex self-center mt-4 text-stone-200">
        <h3>
          {team.capturedFlags} / {team.totalFlags} Flags
        </h3>
      </section>
    </div>
  );
}
