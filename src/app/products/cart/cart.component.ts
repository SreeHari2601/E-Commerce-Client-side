import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


   
 GrandTotal:number=0
  cartItems:any=[]
  updatedTotal:any
  constructor (private cart:CartService) {}

  ngOnInit(): void {
     this.cart.cartItemsList.subscribe((data:any)=>{
      console.log(data.value);
      this.cartItems=data
     })
     
     this.GrandTotal = this.cart.getTotal()
  }

  removeCartItem(products:any) {
    this.cart.removeCartItem(products)
    this.GrandTotal = this.cart.getTotal()
  }

  removeAllItems() {
    this.cart.removeAllItems()
  }

  discount10per() {
    let discount = (this.GrandTotal*10)/100
    this.updatedTotal = this.GrandTotal-discount
    alert("Coupen Added Successfully")
  }

  discount15per() {
    let discount = (this.GrandTotal*15)/100
    this.updatedTotal = this.GrandTotal-discount
  }


  discount20per() {
    let discount = (this.GrandTotal*20)/100
    this.updatedTotal = this.GrandTotal-discount
  }


  discount40per() {
    let discount = (this.GrandTotal*40)/100
    this.updatedTotal = this.GrandTotal-discount
  }


}
