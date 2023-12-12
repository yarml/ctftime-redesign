import {
  CheckOutlined,
  CloseOutlined,
  CrownFilled,
  CrownOutlined,
} from "@ant-design/icons";
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
    <main className="max-w-screen-lg w-full h-full flex items-center justify-between mx-auto px-4 pt-16 pb-12 flex-col gap-10">
      {!username ? (
        <></>
      ) : (
        <div className="flex flex-col w-full p-2 items-stretch">
          <h1 className="text-4xl font-extrabold pb-2">Welcome Yarml!</h1>
          <h2 className="ps-2 text-xl font-semibold pb-4">
            You have a few annoucements...
          </h2>
          <Announcement
            title="Membership request"
            description={
              <>
                AUI WhiteHats will be playing <label className="italic font-thin text-white">Intent CTF</label> next week. Do
                you want to join?
              </>
            }
          />
        </div>
      )}
      <h1 className="self-start text-4xl font-extrabold pb-1">Recent Events</h1>
      <Article
        title="pingCTF Just Concluded!"
        href="https://ctf.knping.pl/scoreboard"
        date="Dec. 10, 2023 10:00PM"
        imgUrl="/pingctf/CTF_2023.png"
        top3Teams={[
          {
            icon: "/pingctf/ept.png",
            name: "EPT",
            country: "NO",
            countryFlag: "https://flagcdn.com/w160/no.png",
            points: 5217,
            capturedFlags: 30,
            totalFlags: 30,
          },
          {
            icon: "/pingctf/lorem.png",
            name: "Lorem Ipsec",
            country: "BE",
            countryFlag: "https://flagcdn.com/w160/be.png",
            points: 4287,
            capturedFlags: 28,
            totalFlags: 30,
          },
          {
            icon: "/pingctf/wojo.png",
            name: "Wojownicy z Piwnicy",
            country: "PL",
            countryFlag: "https://flagcdn.com/w160/pl.png",
            points: 4236,
            capturedFlags: 28,
            totalFlags: 30,
          },
        ]}
      />
      <Article
        title="HTB University CTF Just Concluded!"
        href="https://ctf.hackthebox.com/event/details/university-ctf-2023-brains-bytes-1231"
        date="Dec. 10, 2023 09:00PM"
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
    </main>
  );
}

function Announcement({
  title,
  description,
}: {
  title: string;
  description: string | React.ReactNode;
}) {
  return (
    <section className="flex flex-row bg-stone-700 p-4 rounded-xl justify-between hover:shadow-xl hover:scale-[102%] transition-all">
      <div className="w-[70%] flex flex-col ps-4">
        <h1 className="font-bold text-xl pb-2">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="flex flex-row gap-4 pe-4 items-center">
        <button className="p-4 bg-stone-600 hover:bg-green-600 hover:shadow-2xl transition-all hover:rounded-3xl rounded-xl min-h-10 min-w-10 max-h-10 max-w-10 items-center justify-center">
          <CheckOutlined className="flex items-center justify-center w-full h-full -translate-y-1" />
        </button>
        <button className="p-4 bg-stone-600 hover:bg-red-600 hover:shadow-2xl transition-all hover:rounded-3xl rounded-xl min-h-10 min-w-10 max-h-10 max-w-10 items-center justify-center">
          <CloseOutlined className="flex items-center justify-center w-full h-full -translate-y-1" />
        </button>
      </div>
    </section>
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
    <Link href={href} className="w-full">
      <article className="w-full flex flex-col p-4 pt-0 pb-8 hover:scale-[101%] hover:shadow-xl transition-all">
        <h1 className="font-semibold text-5xl pb-4">{title}</h1>
        <div className="w-full flex flex-col bg-stone-700 rounded-md p-4 pb-8">
          <h4 className="text-xs self-start pb-4 mb-2 pt-2">{date}</h4>
          <Image
            src={imgUrl}
            alt="HTB UniCTF Image"
            width={400}
            height={200}
            className="rounded-md w-full mb-16"
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
        </div>
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
