import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsComponent } from './products.component';
import { ShoesComponent } from './shoes/shoes.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  searchKey = new BehaviorSubject ('')
  constructor(private http : HttpClient) { }

  //getallshoes

  getAllShoes () {
    return this.http.get("http://localhost:3000/shoes")
  }

  getAllMens () {
    return this.http.get("http://localhost:3000/mens")
  }

  getAllWomens () {
    return this.http.get("http://localhost:3000/womens")
  }
 
  addToWishListWomen (product:any) {
    const body = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    
    }
    return this.http.post("http://localhost:3000/add-to-wishlistWomen",body)
  }

  getWishListWomen() {
     return this.http.get("http://localhost:3000/get-wishlistWomen")
  }

  deleteFromWishListWomen (id:any) {
    return this.http.delete("http://localhost:3000/delete-wishlistwomen/"+id)
  }

  
//add to wishlisr

  addToWishList (shoes:any) {
    const body = {
      id: shoes.id,
      title: shoes.title,
      price: shoes.price,
      description: shoes.description,
      category: shoes.category,
      image: shoes.image,
    
    }
    return this.http.post("http://localhost:3000/add-to-wishlist",body)
  }

  getWishList () {
    return this.http.get("http://localhost:3000/get-wishlist")
  }

  deleteFromWishList (id:any) {
    return this.http.delete("http://localhost:3000/delete-wishlist/"+id)
  }

  addToWishListMen(product:any) {
    const body = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    }
    return this.http.post("http://localhost:3000/add-to-wishlistmen",body)
  }
  
  getWishListMen () {
    return this.http.get("http://localhost:3000/get-to-wishlistmen")
  }

  deleteWishListMen(id:any) {
     return this.http.delete ('http://localhost:3000/delete-item-wishlistmen/'+id)
  }

  login(username:any,password:any) {

    const body = {
      username,
      password
    }
   return this.http.post("http://localhost:3000/login",body)
  }


}

