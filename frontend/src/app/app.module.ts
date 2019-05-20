import {
  BrowserModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatTableModule, MatSortModule, MatTabsModule, MatInputModule } from '@angular/material';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AdminComponent } from "./admin/admin.component";
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from "./services/auth.service";
import { RegisterComponent } from "./register/register.component";
import { DevicesComponent } from './devices/devices.component';
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { velocity: 0.4, threshold: 20 } // override default settings
  };
}

export function getToken() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
    DevicesComponent,
    HistoryComponent,
    SettingsComponent,
  ],
  imports: [
    MatTabsModule,
    MatSortModule,
    MatTableModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken
      }
    })
  ],
  providers: [
    AuthService,
    JwtHelperService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
