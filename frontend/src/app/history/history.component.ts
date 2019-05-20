import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Action } from '../classes/Action';
import { ActionService } from '../services/action.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  constructor(private actionService : ActionService) {
    
    this.ngOnInit.bind(this);
    this.columnNames = ['action','stamp','user'];
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
