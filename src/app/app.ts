import { Component, Input, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  showNavBar: boolean = true;
  navOverlay: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let currentRoute = this.route.root;
        while (currentRoute.firstChild) {
            currentRoute = currentRoute.firstChild;
      }
      this.showNavBar = !currentRoute.snapshot.data['hideNavBar'];
      this.navOverlay = currentRoute.snapshot.data['navOverlay'] ?? false;
    });
  }
}
