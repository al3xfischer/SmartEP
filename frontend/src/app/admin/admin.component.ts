import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatSlideToggleChange } from '@angular/material';
import { FlagsService } from '../services/flags.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public secure : boolean;

  constructor(private flagService: FlagsService) {
  }

  async ngOnInit() {
    this.secure = await this.flagService.secureFlag();
  }

  public changed(value: MatSlideToggleChange): void {
    this.flagService.toggleFlag(value.checked);
  }
}
