import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Item } from '../classes/item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  constructor(private cartService: ShoppingCartService) { }

  @Input()
  public product: Item;

  public get path(): string {
    return this.product.path;
  }

  public get title(): string {
    return this.product.title;
  }

  public get price(): number {
    return this.product.price;
  }

  public get description(): string {
    return this.product.description;
  }

  public delete(): void {
    this.cartService.removeItem(this.product);
  }

  ngOnInit() {
  }

}
