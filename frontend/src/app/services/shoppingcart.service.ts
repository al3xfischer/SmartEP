import { Injectable } from '@angular/core';
import { ArtItemInfo } from '../artItemInfo';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  public artItems: ArtItemInfo[];

  public totalValue: number;

  constructor() {
    this.artItems = [];
    this.totalValue = 0;
  }

  public addItem(artItem: ArtItemInfo) {
    if (!this.artItems.some(i => i.name == artItem.name)) {
      this.artItems.push(artItem);
      this.totalValue += artItem.price;
    }
  }

  public removeItem(artItem: ArtItemInfo) {
    this.artItems.splice(this.artItems.indexOf(artItem), 1);
    this.totalValue -= artItem.price;
  }
}
