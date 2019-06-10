import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  constructor() {
    this.refresh = new EventEmitter<string>();
   }

  public refresh : EventEmitter<string>;

  public trigger(key: string){
    if(!key) return;

    this.refresh.emit(key);
  }
}
