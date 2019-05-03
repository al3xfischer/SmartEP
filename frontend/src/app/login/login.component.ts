import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _authService: AuthService, private _router: Router) {
    this.username = '';
    this.keyword = '';
  }

  @Input()
  public username: string;

  @Input()
  public keyword: string;

  ngOnInit() {}

  public async login() {
    const result = await this._authService.login(this.username, this.keyword);
    if (result) {
      this._router.navigate(['pictures']);
    } else {
      alert('Wrong username or password!');
    }
  }
}
