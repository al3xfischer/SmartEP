import { Component, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Item } from '../classes/item';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Output()
  public items: Item[];

  constructor(private cartService: ShoppingCartService) {
    this.items = this.cartService.items;
    this.cartService.countChanged.subscribe(count => {
      this.items = this.cartService.items;
    });
  }

  ngOnInit() {}

  public get total(): number {
    return this.items.map(i => i.price).reduce((prev, cur) => prev + cur, 0);
  }

  public get count(): number {
    return this.items.length;
  }

  public get disableBuy(): boolean {
    return this.items.length === 0;
  }

  public async buyItems() {
    const notBought: Item[] = await this.cartService.buy();
    if (notBought.length > 0) {
      alert(
        'The following products could not be purchased.\nThey are already assigned. \n Items:' +
          notBought.map(p => p.title).join(', ')
      );
    }
  }
}
