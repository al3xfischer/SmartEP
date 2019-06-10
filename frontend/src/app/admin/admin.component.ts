import { Component, OnInit, Input } from '@angular/core';
import { MatSlideToggleChange, MatTabChangeEvent } from '@angular/material';
import { FlagsService } from '../services/flags.service';
import { RefreshService } from '../services/refresh.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Input()
  public secure : boolean;


  constructor(private flagService: FlagsService, private refreshService: RefreshService) {
  }

  async ngOnInit() {
    this.secure = await this.flagService.secureFlag();
  }

  public changed(value: MatSlideToggleChange): void {
    this.secure = value.checked;
    this.flagService.toggleFlag(value.checked);
  }

  public tabChanged(event: MatTabChangeEvent) {
    this.refreshService.trigger(event.tab.textLabel);
  }
}
