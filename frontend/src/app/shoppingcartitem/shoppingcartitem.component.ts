import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { ArtItemInfo } from '../artItemInfo';

@Component({
  selector: 'app-shoppingcartitem',
  templateUrl: './shoppingcartitem.component.html',
  styleUrls: ['./shoppingcartitem.component.scss']
})
export class ShoppingcartitemComponent implements OnInit {

  constructor(private router : Router, private shoppingCartSerive: ShoppingcartService) { 
  }

  ngOnInit() {
  }

  @Input()
  public art: ArtItemInfo;

  removefromShoppingCart() {    
    this.shoppingCartSerive.removeItem(this.art);
  }
}
