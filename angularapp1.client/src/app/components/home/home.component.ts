import { Component } from '@angular/core';
import { InstagramService } from '../../services/instagram.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts: String[] = [];

  constructor(private instagramService: InstagramService) { }

  ngOnInit(): void {
    this.instagramService.getPosts().subscribe((data: String[]) => {
      this.posts = data;
    });
  }

  getDescription(html: String) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html.toString(), 'text/html');
    const alts = Array.from(doc.querySelectorAll('img')).map(img => img.getAttribute('alt'));
    return alts;
  }
}
