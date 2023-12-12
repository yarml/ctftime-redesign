import { TeamInfo } from "../TeamInfo";
import TeamPage from "../TeamPage";

export default function WhiteHats() {
  return (
    <TeamPage
      team={{
        name: "AUI WhiteHats",
        icon: "/teams/whitehats.png",
        website: "whitehats.aui.ma",
        members: [
          {
            name: "Yarml",
            since: "Nov. 30 2023",
            points: 1200,
          },
          {
            name: "mka",
            since: "Nov. 30 2023",
            points: 560,
          },
          {
            name: "ASilver",
            since: "Nov. 30 2023",
            points: 425,
          },
          {
            name: "AbdelH2O",
            since: "Nov. 30 2023",
            points: 1100,
          },
          {
            name: "Jiji",
            since: "Nov. 30 2023",
            points: 230,
          },
          {
            name: "Yunes",
            since: "Nov. 30 2023",
            points: 1156,
          },
        ],
      }}
    />
  );
}
