import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  searchTerm : string = ""
  allShoes:any
  constructor (private api : ApiService, private cart : CartService) {}
  ngOnInit(): void {
    this.api.getAllShoes().subscribe ((data:any)=>{
      this.allShoes=data.result
    })
    this.api.searchKey.subscribe((data:any)=>{
      this.searchTerm=data
      console.log(this.searchTerm);
      
    })
  }
  addToWishlist (shoes:any) {
     this.api.addToWishList(shoes).subscribe((result:any)=> {
      alert(result.message)
     },
    (result:any)=>{
      alert(result.error.message)
    } 
     )
  }

  addToCart(shoes:any) {
  this.cart.addToCart(shoes)
  }
}
