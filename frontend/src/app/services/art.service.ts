import { Injectable } from '@angular/core';
import { ArtItemInfo } from '../artItemInfo'
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  private artItems: ArtItemInfo[];

  constructor(private loginService: LoginService) {
    this.artItems = [];
  }

  private async setup() {
    await fetch('http://localhost:4200/api/artItems')
      .then(res => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then(data => {
        if(data) {
          this.artItems = data;
        }
      })
  }

  public async getArtAmout(): Promise<number> {
    if (this.artItems.length == 0) {
      await this.setup();
    }
    
    return this.artItems.length;
  }

  public async getArt(startIndex: number, amount: number): Promise<ArtItemInfo[]> {
    if (this.artItems.length == 0) {
      await this.setup();
    }

    return this.artItems.slice(startIndex, startIndex + amount);
  }

  public removeArt(art: ArtItemInfo) {
    let index = this.artItems.findIndex(i => i.name == art.name);

    if (index != -1) {
      this.artItems.splice(index, 1);
    }
  }

  public getSpecificArt(name: string): ArtItemInfo {
    return this.artItems.find(function (element) {
      return element.name == name;
    });
  }

  public nextArt(art: ArtItemInfo): ArtItemInfo {
    let index = this.artItems.findIndex(artitem => artitem == art)

    let newIndex = index + 1 % this.artItems.length;

    return this.artItems[newIndex]
  }

  
  public previousArt(art: ArtItemInfo): ArtItemInfo {
    let index = this.artItems.findIndex(artitem => artitem == art)
    
    let newIndex = index - 1 % this.artItems.length;

    return this.artItems[newIndex]
  }
}
