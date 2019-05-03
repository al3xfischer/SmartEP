import {
  BrowserModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { PicturesComponent } from "./pictures/pictures.component";
import { CardComponent } from "./card/card.component";
import { CartItemComponent } from "./cart-item/cart-item.component";
import { LoginComponent } from "./login/login.component";
import { PicdetailsComponent } from "./picdetails/picdetails.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AdminComponent } from "./admin/admin.component";
import { RoundToTwoPipe } from "./pipes/round-to-two.pipe";
import { JwtModule, JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from "./services/auth.service";

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
    ShoppingCartComponent,
    PicturesComponent,
    CardComponent,
    CartItemComponent,
    LoginComponent,
    PicdetailsComponent,
    AdminComponent,
    RoundToTwoPipe
  ],
  imports: [
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
  exports: [RoundToTwoPipe]
})
export class AppModule {}
