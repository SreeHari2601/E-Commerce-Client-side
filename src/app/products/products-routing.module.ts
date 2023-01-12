import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmSectionComponent } from './confirm-section/confirm-section.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MensComponent } from './mens/mens.component';
import { PlaceComponent } from './place/place.component';
import { ShoesComponent } from './shoes/shoes.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WomensComponent } from './womens/womens.component';

const routes: Routes = [{path : "login" , component : LoginComponent } ,
{ path: '', component: HomePageComponent },
{ path: 'cart', component: CartComponent }, 
{ path: 'wishlist', component:WishlistComponent },
{ path: 'shoes', component:ShoesComponent },
{ path: 'mens', component:MensComponent },
{ path: 'womens', component:WomensComponent },
{path : "place" , component : PlaceComponent },
{path : "confirm" , component : ConfirmSectionComponent },
{path : "pay" , component : GpayComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
