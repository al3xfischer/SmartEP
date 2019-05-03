import { Injectable } from '@angular/core';
import SHA256 from "crypto-js/sha256";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public token: string

  public userName: string

  constructor() { }

  public async login(userName: string, password: string): Promise<boolean> {
    let passwordHash = SHA256(password);
    
    const response = await fetch('http://localhost:4200/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      },      
      body: JSON.stringify({user: userName, password: passwordHash.toString()})
    });

    if(response.status === 200) {
      const data = await response.json();
      this.token = data.token;      
      this.userName = userName;
      return true;
    }
    else
    {
      this.token = null;
      alert('Wrong username or password');
      return false;
    }
  }

  public logout() {
    this.token = null;
  }
}
