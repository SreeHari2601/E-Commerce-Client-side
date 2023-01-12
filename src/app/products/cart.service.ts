import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartItemsList = new BehaviorSubject([])  
  cartItemsListArray:any=[]
  
  constructor() { }



 addToCart(product:any) {
  this.cartItemsListArray.push(product)
  this.cartItemsList.next(this.cartItemsListArray)
  console.log(this.cartItemsList);
  let total =this.getTotal()
  console.log(total);
  
  
  // total price 
}
getTotal() {
  let grandSum =0 
  this.cartItemsListArray.map((item:any)=>{
    grandSum+=item.price
  })   
  return grandSum
}

// to remove a single item 

removeCartItem(product:any) {
  this.cartItemsListArray.map((item:any,index:any)=>{
    if(product.id==item.id) {
      this.cartItemsListArray.splice(index,1)
    }
  })
  this.cartItemsList.next(this.cartItemsListArray)
  
}

removeAllItems() {
  this.cartItemsListArray=[]
  this.cartItemsList.next(this.cartItemsListArray)
}

}
