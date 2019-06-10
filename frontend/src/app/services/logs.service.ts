import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(private auth: AuthService) { }

  public getDevices() {
    return fetch(location.origin + '/api/logs', {
        method: 'GET',
        headers: {          
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: this.auth.getToken()
        }
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return [];
        }
      })
      .then(data => {
        if (data) {
          return data;
        } else {
          return null;
        }
      })
      .catch(err => console.log(err));
  }
}
