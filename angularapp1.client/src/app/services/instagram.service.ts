import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private url = 'https://localhost:7278/api/instagram'

  constructor(private http: HttpClient) {}

  getPosts(): Observable<String[]> {
    return this.http.get<String[]>(this.url);
  }
}
