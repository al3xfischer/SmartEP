import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthguardService as AuthGuard } from './services/authguard.service';
import { RoleguardService as RoleGuard } from './services/roleguard.service';
import { RegisterComponent } from './register/register.component';
import { DevicesComponent } from './devices/devices.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: 'devices',
    component: DevicesComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  {
    path: '**',
    component: DevicesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
