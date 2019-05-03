import { Component, OnInit } from '@angular/core';
import { ArtItemInfo } from '../artItemInfo';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { LoginService } from '../services/login.service';
import { ArtService } from '../services/art.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss'],
})
export class ShoppingcartComponent implements OnInit {

  public artItems: ArtItemInfo[];

  constructor(private shoppingCartService: ShoppingcartService, private loginService: LoginService, private artService: ArtService) {
    this.artItems = [];
  }

  ngOnInit() {
    this.artItems = this.shoppingCartService.artItems;
    this.artItems.forEach(item => {
    })
  }

  public async buyItems() {
    await fetch('http://localhost:4200/api/buy', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.loginService.token
      },
      body: JSON.stringify(this.artItems)
    })
      .then(res => {
        if (res.status == 200) {
          alert("Items bought!");

          let artItemsClone  = Object.assign([], this.artItems)

          for (let i = 0; i < artItemsClone.length; i++) {
            this.artService.removeArt(artItemsClone[i]);
            this.shoppingCartService.removeItem(artItemsClone[i]);          
          };
        }
        else {
          alert("You need to be logged in as user to buy items");
        }
      });
  }

  public getTotalValue(): number {
    return this.shoppingCartService.totalValue;
  }
}
