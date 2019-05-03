import { Component, OnInit } from '@angular/core';
import { ArtItemInfo } from '../artItemInfo'
import { ArtService } from '../services/art.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shoppingarea',
  templateUrl: './shoppingarea.component.html',
  styleUrls: ['./shoppingarea.component.scss']
})
export class ShoppingareaComponent implements OnInit {

  private page: number;

  constructor(private artService: ArtService, private route: ActivatedRoute) {
    this.artItems = [];
  }

  public artItems: ArtItemInfo[];

  async ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (document.URL.split('/')[document.URL.split('/').length - 2] == 'page') {
          try {
            this.page = Number(document.URL.split('/')[document.URL.split('/').length - 1])
          }
          catch{
            this.page = 1;
          }
        }
        else {
          this.page = 1;
        }

        this.getArt();
      });

    if (document.URL.split('/')[document.URL.split('/').length - 2] == 'page') {
      try {
        this.page = Number(document.URL.split('/')[document.URL.split('/').length - 1])
      }
      catch{
        this.page = 1;
      }
    }
    else {
      this.page = 1;
    }

    this.getArt();
  }

  private async getArt() {
    this.artItems = await this.artService.getArt((this.page - 1) * 15, 15);
  }
}
