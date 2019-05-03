import { Component, OnInit, Input } from '@angular/core';
import { ArtItemInfo } from '../artItemInfo';

@Component({
  selector: 'app-solditem',
  templateUrl: './solditem.component.html',
  styleUrls: ['./solditem.component.scss']
})
export class SolditemComponent implements OnInit {

  constructor() { }

  @Input()
  public item: ArtItemInfo;

  ngOnInit() {
  }

}
