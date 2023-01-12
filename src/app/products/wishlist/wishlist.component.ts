import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  ApiService
} from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishListMen:any
  wishListWomen: any
  wishlist: any
  eMsg: string = ''
  constructor(private api: ApiService, private router: Router,private cart :CartService) {}
  ngOnInit(): void {
    this.api.getWishList().subscribe((data: any) => {
        this.wishlist = data.result
        if(this.wishlist.length==0){
          this.eMsg='empty wishlist'
        }
      },
      (data: any) => {
        this.eMsg = data.error.message
      }
    )
    this.api.getWishListWomen().subscribe((data: any) => {
        this.wishListWomen = data.result
        if(this.wishlist.length==0){
          this.eMsg='empty wishlist'
        }
      },
      (data: any) => {
        this.eMsg = data.error.message
      }
    )

    this.api.getWishListMen().subscribe((data:any)=>{
        this.wishListMen=data.result
        if(this.wishlist.length==0){
          this.eMsg='empty wishlist'
        }
    },
    (data:any)=>{
      this.eMsg=data.error.message
    }
    )
   
  }
  
  
  
  deleteFromWishList(product: any) {
    this.api.deleteFromWishList(product.id).subscribe((result: any) => {
        alert(result.message)
        window.location.reload()
        this.wishlist =result.wishlist
      },
      (result: any) => {
        alert(result.error.message)
      }
    )
  }

  deleteFromWishListWomen(product: any) {
    this.api.deleteFromWishListWomen(product.id).subscribe((result: any) => {
        alert(result.message)
        window.location.reload()
        this.wishListWomen =result.wishlistW
      },
      (result: any) => {
        alert(result.error.message)
      }
    )
  }

  deleteFromWishListMen(product:any) {
    this.api.deleteWishListMen(product.id).subscribe((result:any)=>{
      alert(result.message)
      window.location.reload()
      this.wishListMen=result.wishlistM
    },
     (result:any)=>{
      alert(result.error.message)
     }
     )
  }

  addToCart(product:any) {
  this.cart.addToCart(product)
  this.deleteFromWishList(product)
  }

  addToCartWomen(product:any) {
    this.cart.addToCart(product)
    this.deleteFromWishListWomen(product)
    }

    
    addToCartMen(product:any) {
      this.cart.addToCart(product)
      this.deleteFromWishListMen(product)
      }
    

}
