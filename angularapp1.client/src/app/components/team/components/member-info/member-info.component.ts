import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member } from '../../../../models/Member';

@Component({
  selector: 'member-info',
  standalone: false,
  templateUrl: './member-info.component.html',
  styleUrl: './member-info.component.css'
})
export class MemberInfoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Member) { }
}
