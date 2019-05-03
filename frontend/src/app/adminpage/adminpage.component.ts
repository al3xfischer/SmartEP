import { Component, OnInit } from '@angular/core';
import { ArtItemInfo } from '../artItemInfo';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {

  public soldItems: ArtItemInfo[];

  public turnover: string;
  public tax: string;
  public netIncome: string;

  constructor(private loginService: LoginService) {
    this.turnover = '0';
    this.tax = '0';
    this.netIncome = '0';
  }

  async ngOnInit() {
    await fetch('http://localhost:4200/api/admin', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.loginService.token
      }
    })
      .then(res => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then(data => {
        if (data) {
          this.soldItems = data;

          let turnover = 0;

          this.soldItems.forEach(item => {
            turnover += item.price;
          })

          let tax = ((turnover / 100) * 11.5)

          this.turnover = turnover.toFixed(2);
          this.tax = tax.toFixed(2);
          this.netIncome = (turnover - tax).toFixed(2);
        }
      })
  }

}
