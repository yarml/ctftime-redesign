import Image from "next/image";
import { TeamInfo } from "./TeamInfo";
import Link from "next/link";

export default function TeamPage({ team }: { team: TeamInfo }) {
  return (
    <main className="max-w-screen-lg w-full h-full flex items-center justify-between mx-auto px-4 pt-16 pb-12 flex-col gap-10">
      <div className="flex flex-row w-full p-2 justify-between">
        <div className="flex flex-col w-full">
          <h1 className="text-4xl font-extrabold pb-1">{team.name}</h1>
          <p className="ps-2 pb-4">You are a memeber of this team!</p>
          <section>
            <h1 className="text-3xl font-bold ps-2 pb-2">
              General Information
            </h1>
            <div className="flex flex-row gap-4">
              <label className="ps-4 pb-4 font-bold text-xl">Website</label>
              <Link
                href={`https://${team.website}`}
                className="underline text-[#e3000b]"
              >
                {team.website}
              </Link>
            </div>
          </section>
          <section>
            <h1 className="text-3xl font-bold ps-2 pb-2">Members</h1>
            <table className="w-full ps-4">
              <thead className="w-full pb-2">
                <tr className="w-full">
                    <th className="w-1/3 text-left">Name</th>
                    <th className="w-1/3 text-center">Points</th>
                    <th className="w-1/3 text-right">Member Since</th>

                </tr>
              </thead>
              <tbody className="w-full">
                {team.members.map((member) => (
                  <tr key={member.name} className="w-full mb-4">
                    <td className="w-1/3 text-left">{member.name}</td>
                    <td className="w-1/3 text-center">{member.points}</td>
                    <td className="w-1/3 text-right">{member.since}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
        <Image
          src={team.icon}
          width={256}
          height={256}
          alt="Team Profile Picture"
          className="relative right-0 rounded-[50%] w-48 h-48 -translate-y-1/4"
        />
      </div>
    </main>
  );
}

function TeamMemberRow({
  name,
  since,
  points,
}: {
  name: string;
  since: string;
  points: number;
}) {
  return (
    <>
      {name}:{since}:{points}
    </>
  );
}
