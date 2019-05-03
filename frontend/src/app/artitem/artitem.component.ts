import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ArtItemInfo } from '../artItemInfo';
import { ShoppingcartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-artitem',
  templateUrl: './artitem.component.html',
  styleUrls: ['./artitem.component.scss']
})
export class ArtitemComponent implements OnInit {

  constructor(private router : Router, private shoppingCartSerive: ShoppingcartService) { 
  }

  ngOnInit() {
  }

  @Input()
  public art: ArtItemInfo;

  showDetails() {
    this.router.navigate([`info/${this.art.name}`]);
  }

  addToShoppingCart() {    
    this.shoppingCartSerive.addItem(this.art);
  }
}
