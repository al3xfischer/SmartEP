import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MynavbarComponent } from './mynavbar/mynavbar.component';
import { ShoppingareaComponent } from './shoppingarea/shoppingarea.component';
import { ArtitemComponent } from './artitem/artitem.component';
import { ArtdetailsComponent } from './artdetails/artdetails.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ShoppingcartitemComponent} from './shoppingcartitem/shoppingcartitem.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component'
import { FormsModule } from '@angular/forms';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { SolditemComponent } from './solditem/solditem.component'

@NgModule({
  declarations: [
    AppComponent,
    MynavbarComponent,
    ShoppingareaComponent,
    ArtitemComponent,
    ArtdetailsComponent,
    ShoppingcartComponent,
    ShoppingcartitemComponent,
    LoginscreenComponent,
    AdminpageComponent,
    SolditemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
