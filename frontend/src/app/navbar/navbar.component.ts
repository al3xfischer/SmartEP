import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(private _authService: AuthService) {
    this.amount = 0;
    this.showLogin = !_authService.isLoggedIn();
    this.showAdmin = _authService.isAdmin();

    this._authService.loggedIn.subscribe(loggedIn => {
      this.showLogin = !loggedIn;
      this.showAdmin = this._authService.isAdmin();
    });
  }

  public showAmount: boolean;

  public amount: Number;

  public showLogin: boolean;

  public showAdmin: boolean;

  public logout() {
    this._authService.logout();
  }

  ngOnInit() {
  }
}
