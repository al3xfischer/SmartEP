import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.scss']
})
export class LoginscreenComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
    this.username = "";
    this.password = "";
  }

  ngOnInit() {
  }

  @Input()
  public username: string;

  @Input()
  public password: string;

  public async login() {
    if(await this.loginService.login(this.username, this.password)) {
      this.router.navigate(['']);
    }
  }
}
