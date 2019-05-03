import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from './pictures/pictures.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { PicdetailsComponent } from './picdetails/picdetails.component';
import { AdminComponent } from './admin/admin.component';
import { AuthguardService as AuthGuard } from './services/authguard.service';
import { RoleguardService as RoleGuard } from './services/roleguard.service';

const routes: Routes = [
  {
    path: 'pictures',
    component: PicturesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shoppingcart',
    component: ShoppingCartComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'details/:hash',
    component: PicdetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  {
    path: '**',
    component: PicturesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
