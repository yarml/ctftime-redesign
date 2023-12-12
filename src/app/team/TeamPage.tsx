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
            <table>
              <thead className="w-full">
                <th className="w-1/3">Name</th>
                <th className="w-1/3">Points</th>
                <th className="w-1/3">Member Since</th>
              </thead>
              <tbody>
                {team.members.map((member) => (
                  <tr key={member.name}>
                    <td>{member.name}</td>
                    <td>{member.points}</td>
                    <td>{member.since}</td>
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
