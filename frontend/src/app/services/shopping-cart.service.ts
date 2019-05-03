import { Injectable, EventEmitter } from '@angular/core';
import { Item } from '../classes/item';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _items: Item[];

  constructor(private auth: AuthService) {
    this._items = [];
  }

  public get items(): Item[] {
    return this._items;
  }

  public countChanged: EventEmitter<number> = new EventEmitter<number>();

  public addItem(item: Item): void {
    if (!this._items.some(i => Item.Equals(i, item))) {
      this._items.push(item);
    }

    this.countChanged.emit(this._items.length);
  }

  public removeItem(item: Item) {
    const currentCount: number = this.items.length;
    this._items = this._items.filter(i => !Item.Equals(i, item));

    if (currentCount !== this.items.length) {
      this.countChanged.emit(this.items.length);
    }
  }

  public async buy(): Promise<Item[]> {
    const data: Item[] = await fetch(location.origin + '/api/buy', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.auth.getToken()
      },
      body: JSON.stringify(this.items)
    }).then(res => res.json());

    this._items = [];
    this.countChanged.emit(this._items.length);
    console.log(JSON.stringify(data));
    return data;
  }
}
