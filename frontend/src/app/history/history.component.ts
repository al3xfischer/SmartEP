import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Action } from '../classes/Action';
import { ActionService } from '../services/action.service';
import { RefreshService } from '../services/refresh.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    if(this.refershService) this.refreshEvent.unsubscribe();
  }

  @ViewChild(MatSort) sort: MatSort;

  private refreshEvent : any;

  constructor(private actionService : ActionService, private refershService: RefreshService) {
    
    this.ngOnInit.bind(this);
    this.columnNames = ['action','stamp','user'];

    this.refreshEvent = this.refershService.refresh.subscribe(key => {
      if(key === 'History'){
        this.ngOnInit();
      }
    });
  }

  async ngOnInit() {
    let data = await this.actionService.getActions();
    this.actions = new MatTableDataSource(data);
    this.actions.sort = this.sort;
  }

  @Input()
  public actions : MatTableDataSource<Action>;

  @Input()
  public columnNames : string[];

}
