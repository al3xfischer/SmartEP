import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import decode from 'jwt-decode';
import { ArtService } from '../services/art.service';

@Component({
  selector: 'app-mynavbar',
  templateUrl: './mynavbar.component.html',
  styleUrls: ['./mynavbar.component.scss']
})
export class MynavbarComponent implements OnInit {

  public pages: number[];

  constructor(private loginService: LoginService, private artService: ArtService,) { }

  async ngOnInit() {
    this.pages = [];

    for (let i = 0; i < Math.ceil(await this.artService.getArtAmout()/15); i++) {
      this.pages.push(i + 1);
    }
  }

  public getLogedIn(): boolean {
    return this.loginService.token ? true : false;
  }

  public getIsAdmin(): boolean {
    if(this.loginService.token)
    {
      return decode(this.loginService.token).role == 'admin'
    }
    else
    {
      return false;
    }
  }

  public logout() {
    this.loginService.logout();
  }

  public getUsername(): string {
    return this.loginService.userName;
  }
}
