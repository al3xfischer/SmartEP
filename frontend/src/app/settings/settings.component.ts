import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { Device } from '../classes/Device';
import { MatSort, MatTableDataSource } from '@angular/material';
import { RefreshService } from '../services/refresh.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  constructor(private deviceService : DeviceService, private refershService: RefreshService) {
    
    this.ngOnInit.bind(this);
    this.columnNames = ['name','actual','set'];

    this.refershService.refresh.subscribe(key => {
      if(key === 'Settings'){
        this.ngOnInit();
      }
    });
  }

  async ngOnInit() {
    const data = await this.deviceService.getDevices();
    this.devices = new MatTableDataSource(data);
    this.devices.sort = this.sort;
  }

  @Input()
  public devices : MatTableDataSource<Device>;

  @Input()
  public columnNames : string[];

  @Input()
  public msg : string;

  @Input()
  public success : boolean;

  public async save() : Promise<void> {
    console.log(this.devices.data);
    let result = await this.deviceService.updateDevices(this.devices.data);
    if(! result) {this.msg = "Unable to save changes!"; this.success = false; }
    else {this.msg = "Successfully saved changes!";  this.success = true; }
    console.log(this.msg);
    console.log(this.success);
  }
}
