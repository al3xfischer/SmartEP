import { Component, OnInit, Input } from '@angular/core';
import { PictureService } from '../services/picture.service';
import { Item } from '../classes/item';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  constructor(private pictureService: PictureService) {
    this.items = [];
    this.showMoreVisible = true;
  }

  @Input()
  public items: Item[];

  public showMoreVisible: boolean;

  async ngOnInit() {
    this.items = await this.pictureService.getPictures();
  }

  async loadMore() {
    const batch = await this.pictureService.getBatch();
    this.showMoreVisible = batch.length > 0 && batch.length === 20;
    this.items = this.items.concat(batch);
  }
}
