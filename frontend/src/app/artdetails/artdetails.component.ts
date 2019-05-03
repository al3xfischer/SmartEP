import { Component, OnInit } from '@angular/core';
import { ArtItemInfo } from '../artItemInfo';
import { ArtService } from '../services/art.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-artdetails',
  templateUrl: './artdetails.component.html',
  styleUrls: ['./artdetails.component.scss'],
  animations: [
    trigger('pictureChange', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0
      })),
      transition('visible => invisible', [
        animate('1s')
      ]),
      transition('invisible => visible', [
        animate('1s')
      ]),
    ]),
  ]
})
export class ArtdetailsComponent implements OnInit {

  public art: ArtItemInfo;

  private state: string;

  private wantedFunction: string;

  constructor(private artService: ArtService) {
    document.onkeydown = key => {
      if (key.keyCode === 37) {
        this.previousPicture();
      }
      else if (key.keyCode == 39) {
        this.nextPicture();
      }
    }

    this.state = 'visible';
  }

  ngOnInit() {
    this.art = this.artService.getSpecificArt(document.URL.split('/')[document.URL.split('/').length - 1]);
  }

  public nextPicture() {
    this.wantedFunction = 'next'
    this.animate();
  }

  public previousPicture() {
    this.wantedFunction = 'previous'
    this.animate();
  }

  onDone($event) {
    if (this.state == 'invisible') {
      this.state = 'visible'
      
      if (this.wantedFunction == 'next') {
        this.art = this.artService.nextArt(this.art);
      }
      else {
        this.art = this.artService.previousArt(this.art);
      }
    }
  }

  private animate() {
    this.state = this.state == 'visible' ? 'invisible' : 'visible';
  }
}
