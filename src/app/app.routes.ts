import { Routes } from '@angular/router';

import { Home } from './features/home/home/home';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';
import { DashboardComponent } from './features/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    data: {navOverlay: true}
  },

  {
    path: 'auth/login',
    component: LoginComponent,
    data: {hideNavBar: true}
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
    data: {hideNavBar: true}
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {navOverlay: false}
}
];
