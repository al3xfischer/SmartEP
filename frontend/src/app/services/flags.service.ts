import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FlagsService {

  constructor(private auth: AuthService) { }

  public toggleFlag(value : boolean) : Promise<boolean> {
    return fetch(`${location.origin}/api/security`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.auth.getToken()
      },
      body: JSON.stringify({secure: value})
    }).then(res => {
      if(res.ok) return true;
      else return false;
    });
  }

  public secureFlag() : Promise<boolean> {
    return fetch(`${location.origin}/api/secureflag`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.auth.getToken()
      },
    }).then(res => {
      if(res.ok){
        return res.json();
      }
      else{
        return null;
      }
    }).then(data => {
      if(data && data.secure) {
        return data.secure;
      }  
      else {
        return false;
      }
    });
  }
}