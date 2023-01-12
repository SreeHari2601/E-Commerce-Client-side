import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { ShoesComponent } from './shoes/shoes.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { PlaceComponent } from './place/place.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmSectionComponent } from './confirm-section/confirm-section.component';
import { GpayComponent } from './gpay/gpay.component';




@NgModule({
  declarations: [
    ProductsComponent,
    HomePageComponent,
    WishlistComponent,
    CartComponent,
    ShoesComponent,
    MensComponent,
    WomensComponent,
    FilterPipe,
    PlaceComponent,
    ConfirmSectionComponent,
    GpayComponent
   
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  
  ]
})
export class ProductsModule { }
