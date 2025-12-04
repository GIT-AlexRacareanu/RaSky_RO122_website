import { MatchScores } from "./MatchScores";
import { Team } from "./Team";

export interface Match {
  matchNum: number;
  scores: MatchScores;
  teams: Team[];
}
