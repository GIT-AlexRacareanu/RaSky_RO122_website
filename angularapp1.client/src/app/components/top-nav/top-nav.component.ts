import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-nav',
  standalone: false,
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css',
})
export class TopNavComponent {
  constructor(private router: Router) {}
  routes = ['HOME', 'TEAM', 'ABOUT', 'PERFORMANCE'];
  nav(route: string) {
    this.router.navigate([route.toLowerCase()]);
  }
}
