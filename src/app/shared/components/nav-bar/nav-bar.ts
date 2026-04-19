import { Component } from '@angular/core';
import { LoginComponent } from '../../../features/auth/login/login';
import { RegisterComponent } from '../../../features/auth/register/register';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LoginComponent, RegisterComponent],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBarComponent {
  showLoginModal = false;

  openLoginModal() {
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
  }

}
