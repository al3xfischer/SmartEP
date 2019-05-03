import {
  Component,
  OnInit,
  HostBinding,
  ChangeDetectorRef
} from '@angular/core';
import { PictureService } from '../services/picture.service';
import { Item } from '../classes/item';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-picdetails',
  templateUrl: './picdetails.component.html',
  styleUrls: ['./picdetails.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: '1' })),
      state('out', style({ opacity: '0' })),
      transition('in => out', [animate(100)]),
      transition('out => in', [animate(500)])
    ])
  ]
})
export class PicdetailsComponent implements OnInit {
  private _currentItem: Item;

  private _direction: string;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _pictureService: PictureService,
    private cd: ChangeDetectorRef
  ) {
    document.onkeydown = e => {
      if (e.key === 'left arrow') {
        this.before();
      } else if (e.key === 'right arrow') {
        this.next();
      }
    };
  }

  public get currentTitle(): string {
    return this._currentItem.title;
  }

  public get currentDescription(): string {
    return this._currentItem.description;
  }

  public get currentSource(): string {
    return this._currentItem.path;
  }

  public isVisible: boolean;

  public state = 'in';

  public counter = 0;

  public enableAnimation = false;

  ngOnInit() {
    const id: string = this._Activatedroute.snapshot.params['hash'];
    this._currentItem = this._pictureService.getPicture(id);
    this.isVisible = true;
  }

  public close() {
    this._router.navigate(['pictures']);
  }

  public next() {
    this._direction = 'next';
    this.startAnimation();
  }

  public before() {
    this._direction = 'before';
    this.startAnimation();
  }

  private async toggleImg() {
    if (this._direction === 'next') {
      this._currentItem = await this._pictureService.getNext(this._currentItem);
    } else if (this._direction === 'before') {
      this._currentItem = this._pictureService.getPrevious(this._currentItem);
    }
    this._direction = '';
  }

  private startAnimation() {
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
  }

  public onDone($event) {
    if (this.enableAnimation) {
      if (this.counter === 1) {
        this.toggleImg();
      }

      this.toggleState();
    }
  }

  private async toggleState() {
    if (this.counter < 2) {
      this.state = this.state === 'in' ? 'out' : 'in';
      this.cd.detectChanges();
      this.counter++;
    }
  }
}
