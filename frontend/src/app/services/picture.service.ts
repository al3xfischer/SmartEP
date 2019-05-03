import { Injectable } from '@angular/core';
import { Item } from '../classes/item';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private _lastBatchCounter: number;

  private _pictures: Item[];

  private _items: { [key: string]: Item } = {};

  constructor(private auth: AuthService) {
    this._pictures = [];
    this._lastBatchCounter = 0;
  }

  public getPictures() {
    return new Promise<Item[]>((resolve, reject) => {
      if (this._pictures.length > 0) {
        resolve(this._pictures.slice(0, 20));
      }

      fetch(location.origin + '/api/products', {
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
            this._pictures = data;
            resolve(data);
            this._lastBatchCounter = 0;
            this.createDict(data);
          }
        })
        .catch(err => reject(err));
    });
  }

  public getBatch(): Promise<Item[]> {
    return new Promise<Item[]>((resolve, reject) => {
      fetch(
        location.origin +
        `/api/products?batch=${++this._lastBatchCounter}`,
        {
          headers: {
            Authorization: this.auth.getToken()
          }
        }
      )
        .then(async res => {
          return res.json();
        })
        .then(data => {
          this._pictures = this._pictures.concat(data);
          this.createDict(data);
          resolve(data);
        })
        .catch(err => reject(err));
    });
  }

  public getSold() {
    return new Promise<Item[]>((resolve, reject) => {
      fetch(location.origin + '/api/soldproducts', {
        headers: {
          Authorization: this.auth.getToken()
        }
      })
        .then(res => {
          if (res.status === 200) {
            return res.json();
          } else {
            return new Array<Item>();
          }
        })
        .then(data => {
          resolve(data);
        })
        .catch(err => reject(err));
    });
  }

  public getHash(item: Item): number {
    const json = JSON.stringify(item);
    let hash = 0;
    let i = 0;
    const len = json.length;
    while (i < len) {
      // tslint:disable-next-line
      hash = ((hash << 5) - hash + json.charCodeAt(i++)) << 0;
    }
    return hash * -1;
  }

  public getPicture(hash: string) {
    return this._items[hash];
  }

  public async getNext(item: Item): Promise<Item> {
    let currentIndex = this._pictures.findIndex(i => Item.Equals(i, item));
    if (currentIndex + 1 === this._pictures.length) {
      const batchItems: Item[] = await this.getBatch();
      this._lastBatchCounter -= 1;
      if (batchItems.length === 0) {
        currentIndex = -1;
      }
    }
    return this._pictures[currentIndex + 1];
  }

  public getPrevious(item: Item) {
    let currentIndex = this._pictures.findIndex(i => Item.Equals(i, item));
    if (currentIndex === 0) {
      currentIndex = this._pictures.length;
    }
    return this._pictures[currentIndex - 1];
  }

  private createDict(items: Item[]) {
    items.forEach(i => (this._items[this.getHash(i).toString()] = i));
  }
}
