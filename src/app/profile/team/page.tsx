import Link from "next/link";
import Input from "../Input";

export default function TeamPage() {
  return (
    <div className="flex flex-col px-4 gap-6 items-stretch pb-8">
      <h1 className="font-bold text-4xl">Team Information</h1>
      <div className="flex flex-row w-full  items-stretch">
        <section className="flex flex-col w-1/2">
          <h2 className="text-xl font-semibold">Your Current Teams</h2>
          <ul className="flex flex-col gap-2 mt-4 px-2">
            <TeamRow name="AUI WhiteHats" comment="Since Nov. 30 2023" />
            <TeamRow name="Deviteam" comment="Since Jun. 07 2023" />
          </ul>
          <h2 className="text-xl font-semibold pt-8 pb-2">Join a New Team</h2>
          <form className="flex flex-row ps-1">
            <div className="flex flex-col">
              <label htmlFor="team_name">Team Name</label>
              <div className="flex flex-row">
                <Input id="team_name" placeholder="Team Name" type="text" />
                <button className="text-white hover:text-[#e3000b] font-bold text-sm w-1/2 mx-4 transition-all">Send Request</button>
              </div>
            </div>
          </form>
        </section>
        <div className="min-w-[2px] bg-white" />
        <section className="flex flex-col w-1/2 ps-2">
          <h2 className="text-xl font-semibold">Your Current Teams</h2>
          <ul className="flex flex-col gap-2 mt-4 px-2">
            <TeamRow name="yarm" comment="Left Oct. 30 2023" />
            <TeamRow name="zu7al" comment="Left May. 19 2023" />
            <TeamRow name="wiresec" comment="Left Dec. 23 2022" />
            <TeamRow name="Insulators" comment="Left Apr. 25 2022" />
          </ul>
        </section>
      </div>
    </div>
  );
}

function TeamRow({ name, comment }: { name: string; comment: string }) {
  return (
    <Link href="#">
      <li className="flex flex-row justify-between hover:text-[#e3000b] transition-colors">
        <label className="text-lg">{name}</label>
        <label>{comment}</label>
      </li>
    </Link>
  );
}
