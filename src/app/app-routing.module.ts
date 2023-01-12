import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsRoutingModule } from './products/products-routing.module';
import { ShoesComponent } from './products/shoes/shoes.component';

const routes: Routes = [
  {path:"" , redirectTo:"/products",pathMatch:'full'},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  {path:"**", component:PageNotFoundComponent},
  {path : "shoes" , component : ShoesComponent },
  
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes),
    ProductsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
