import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleguardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const role = this.auth.getRole();

    if (!this.auth.isLoggedIn() || !role || role !== expectedRole) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
