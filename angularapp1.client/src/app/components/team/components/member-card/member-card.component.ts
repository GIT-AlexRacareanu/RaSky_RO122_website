import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Member } from '../../../../models/Member';
import { MemberInfoComponent } from '../member-info/member-info.component';


@Component({
  selector: 'member-card',
  standalone: false,
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCardComponent {
  @Input()
    member!: Member;
  dialog = inject(MatDialog)
  openDialog(m: Member) {
    this.dialog.open(MemberInfoComponent, {
      data: m,
      height: 'auto',
      width: '50%',
    });
    console.log(m);
  }
}
