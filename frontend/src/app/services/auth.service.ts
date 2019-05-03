import { Injectable, EventEmitter } from '@angular/core';
import decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private jwtHelper: JwtHelperService) {}

  public loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();

  public async login(name: string, word: string): Promise<boolean> {
    if (this.jwtHelper.tokenGetter() !== null) {
      return Promise.resolve(false);
    }
    console.log(`${location.origin}/api/login`);
    const response = await fetch(`${location.origin}/api/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      },
      body: JSON.stringify({ user: name, pw: word })
    });
    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      this.loggedIn.emit(true);
      return true;
    } else {
      return false;
    }
  }

  public logout() {
    localStorage.removeItem('token');
    this.loggedIn.emit(false);
  }

  public isLoggedIn(): boolean {
    const token: string = localStorage.getItem('token');

    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    } else {
      return false;
    }
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public getRole(): string {
    const token = localStorage.getItem('token');
    if (token) {
      return decode(token).role;
    }

    return null;
  }

  public isAdmin(): boolean {
    return this.getRole() === 'admin';
  }
}
