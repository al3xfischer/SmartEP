import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Device } from '../classes/Device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private _devices: Device[];

  private _items: { [key: string]: Device } = {};

  constructor(private auth: AuthService) {
    this._devices = [];
  }

  public getDevices() {
    return new Promise<Device[]>((resolve, reject) => {
      if (this._devices.length > 0) {
        resolve(this._devices.slice(0, 20));
      }

      fetch(location.origin + '/api/devices', {
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
          this._devices = data;
          resolve(data);
        }
      })
      .catch(err => console.log(err));
    });
  }
}
