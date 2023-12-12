import TeamPage from "../TeamPage";

export default function WhiteHats() {
  return (
    <TeamPage
      team={{
        name: "Deviteam",
        icon: "/teams/deviteam.png",
        website: "deviteam.aui.ma",
        members: [
          {
            name: "Yarml",
            since: "Jun. 07 2023",
            points: 1363,
          },
          {
            name: "mka",
            since: "May. 25 2023",
            points: 2540,
          },
          {
            name: "AbdelH2O",
            since: "May. 25 2023",
            points: 3752,
          },
        ]
      }}
    />
  );
}
