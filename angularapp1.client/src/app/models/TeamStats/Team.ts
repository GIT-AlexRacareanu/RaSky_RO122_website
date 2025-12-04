import { Location } from "./Location";
import { QuickStats } from "./QuickStats";
import { TeamEventParticipation } from "./TeamEventParticipation";

export interface Team {
  number: number;
  name: string;
  schoolName: string;
  rookieYear: number;
  quickStats: QuickStats
  location: Location;
  events: TeamEventParticipation[];
}
