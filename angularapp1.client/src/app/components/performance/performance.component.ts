import { Component, OnInit, Query } from '@angular/core';
import { Team } from '../../models/TeamStats/Team';
import { PerformanceService } from '../../services/performance/performance.service';

@Component({
  selector: 'performance',
  standalone: false,
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.css',
})
export class PerformanceComponent implements OnInit {
  constructor(private performanceService: PerformanceService) { }
  team!: Team;
  season: number = 2025;
  displayedColumns: string[] = ['number', 'score', 'blueAlliance', 'redAlliance']
  quickStatsColumns: string[] = ['total', 'auto', 'dc', 'eg']

  years: number[] = [2023, 2024, 2025, 2026];
  ngOnInit(): void {
    this.performanceService.getTeam(this.season - 1)
      .subscribe(team => { this.team = team });
  }

  onSeasonChange(event: any) {
    const season = event.value;
    this.performanceService.getTeam(season - 1)
      .subscribe(team => {
        this.team = team;
      });
  }

  toRank(rank: number | undefined) {
    if (rank != undefined) {
      if (rank % 10 == 1 && rank != 11)
        return rank + 'st';
      else if (rank % 10 == 2 && rank != 12)
        return rank + 'nd';
      return rank + 'th';
    }
    return NaN;
  }

  rankColor(rank: number) {
    if (rank == 1)
      return 'yellow';
    else if (rank == 2)
      return 'lightgray';
    return '#CD7F32';
  }
}
