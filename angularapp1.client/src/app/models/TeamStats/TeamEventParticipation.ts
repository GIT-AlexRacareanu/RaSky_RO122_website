import { Award } from "./Award";
import { Event } from "./Event";
import { TeamMatchParticipation } from "./TeamMatchParticipation";

export interface TeamEventParticipation {
  stats: { wins:number, losses:number, ties:number};
  event: Event;
  awards: Award[];
  matches: TeamMatchParticipation[];
}
