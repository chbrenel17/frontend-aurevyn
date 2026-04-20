import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AuthData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  register(data: AuthData): Observable<any> {
      return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: AuthData): Observable<any> {
      return this.http.post(`${this.apiUrl}/login`, data);
  }

  saveToken(token: string): void {
      localStorage.setItem('token', token);
  }

  getToken(): string | null {
      return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
      return !!this.getToken();
  }

  logout(): void {
      localStorage.removeItem('token');
  }
}
