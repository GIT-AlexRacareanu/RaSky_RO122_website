import { Component, inject, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { Member } from '../../models/Member';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  standalone: false
})
export class TeamComponent implements OnInit {
  constructor(private memberService: MemberService) { }
  members: Member[] = [];
  mentor: Member[] = [];
  leader: Member[] = [];
  member: Member[] = [];

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((data: Member[]) => {
      this.members = data;
      this.initLists();
    });
  }
  initLists() {
    for (let m of this.members)
    {
      if (m.roles?.find(r => r.id == 1 || r.id == 2)) {
        this.leader.push(m);
      }
      else if (m.roles?.find(r => r.id == 4)) {
        this.mentor.push(m);
      }
      else {
        this.member.push(m);
      }
    }
    this.mentor.sort((m1, m2) => m1.enrollment_Time - m2.enrollment_Time);
    this.leader.sort((m1, m2) => m1.enrollment_Time - m2.enrollment_Time);
    this.member.sort((m1, m2) => m1.enrollment_Time - m2.enrollment_Time);
  }
}
