import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { GET_TEAM } from './queries';
import { Team } from '../../models/TeamStats/Team';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  constructor(private apollo: Apollo) { }

  getTeam(season: number): Observable<Team> {
    return this.apollo
      .query<{teamByNumber: Team}>({
        query: GET_TEAM(season),
        variables: {
          season: season,
        }
      }).pipe(
        map(result => result.data!.teamByNumber)
      );
  }
}
