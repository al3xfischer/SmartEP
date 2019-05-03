import { Component, OnInit } from '@angular/core';
import { PictureService } from '../services/picture.service';
import { Item } from '../classes/item';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private _picService: PictureService, private auth: AuthService) {
    this.items = [];
  }

  public items: Item[];

  public get token(): string {
    return this.auth.getToken();
  }

  public get revenue(): number {
    return this.items.map(i => i.price).reduce((prev, next) => prev + next, 0);
  }

  public get taxes(): string {
    return (this.revenue * 0.13).toFixed(2);
  }

  public get profit(): string {
    return (this.revenue - parseFloat(this.taxes)).toFixed(2);
  }

  async ngOnInit() {
    this.items = await this._picService.getSold();
  }

}
