import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FlagsService {

  constructor(private auth: AuthService) { }

  public toggleFlag() : void {
    fetch(`${location.origin}/api/secure`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.auth.getToken()
      },
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