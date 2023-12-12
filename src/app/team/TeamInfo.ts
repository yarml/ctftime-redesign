export type TeamInfo = {
  name: string;
  icon: string;
  website: string;
  members: {
    name: string;
    since: string;
    points: number;
  }[];
};
