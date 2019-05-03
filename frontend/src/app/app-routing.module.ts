import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingareaComponent } from './shoppingarea/shoppingarea.component';
import { ArtdetailsComponent } from './artdetails/artdetails.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { AdminpageComponent } from './adminpage/adminpage.component';

const routes: Routes = [
  { path: 'info/:name', component: ArtdetailsComponent},
  { path: 'page/:number', component: ShoppingareaComponent},
  { path: 'login', component: LoginscreenComponent},
  { path: 'shoppingcart', component: ShoppingcartComponent},
  { path: 'admin', component: AdminpageComponent},
  { path: '**', component: ShoppingareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
