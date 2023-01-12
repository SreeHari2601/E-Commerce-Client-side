import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent implements OnInit {
  allWomens:any
  searchTerm:string=''
  constructor (private api :ApiService, private cart : CartService) { }

  ngOnInit(): void {
    this.api.getAllWomens().subscribe((data:any)=>{
    this.allWomens = data.result
    console.log(this.allWomens);
    
    })
    this.api.searchKey.subscribe((data:any)=>{
      this.searchTerm=data
      console.log(this.searchTerm);
      
    })

  }

  addToWishList(product:any) {
    this.api.addToWishListWomen(product).subscribe((result:any)=>{
      alert(result.message)
    },
    (result:any)=>{
      alert(result.error.message)
    }
    )   
  }

  addToCartWomen(product:any) {
  this.cart.addToCart(product)
  }
}
