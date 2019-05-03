import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Item } from '../classes/item';
import { Router } from '@angular/router';
import { PictureService } from '../services/picture.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private router: Router,
    private cartService: ShoppingCartService,
    private picService: PictureService,
    private auth: AuthService) { }

  @Input()
  public item: Item;

  ngOnInit() {
  }

  public get price(): number {
    return this.item.price;
  }

  public get title(): string {
    return this.item.title;
  }

  public get token(): string {
    return this.auth.getToken();
  }

  public get path(): string {
    return this.item.path;
  }

  public buy(): void {
    this.cartService.addItem(this.item);
  }

  public details() {
    const hash = this.picService.getHash(this.item).toString();
    this.router.navigate([`details/${hash}`]);
  }
}
