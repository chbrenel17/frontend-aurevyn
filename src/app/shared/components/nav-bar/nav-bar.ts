import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgClass } from "@angular/common";


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBarComponent {

  currentRoute: string = '';
  @Input() overlay:boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => { 
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
  }); }    

  get isHome(): boolean {
    return this.currentRoute === '/';
  }

  goToLogin() {
    this.router.navigate(['auth/login']);
  }
}

