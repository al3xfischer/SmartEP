import { Injectable } from '@angular/core';
import { Action } from '../classes/Action';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  private _actions : Action[];

  constructor(private auth : AuthService) {
    this._actions = [];
   }

  public async getActions() : Promise<Action[]> {
    return new Promise<Action[]>((resolve) => {

      fetch(location.origin + '/api/actions', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: this.auth.getToken()
        }
      })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then(data => {
        if (data) {
          this._actions = data;
          resolve(data);
        }
      })
      .catch(err => console.log(err));
    });
  }
}
