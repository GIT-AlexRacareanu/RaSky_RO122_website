import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../models/Member';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private http: HttpClient) { }
  private apiUrl = "http://localhost:5019/api";
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.apiUrl}/members`);
  }
  getMembersByRole(role: number): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.apiUrl}/members/role/${role}`)
  }
}
