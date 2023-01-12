import {
  Component,
  OnInit
} from '@angular/core';
import {
  ApiService
} from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {
  searchTerm: string = ''
  allMens: any
  constructor(private api: ApiService , private cart :CartService) {}

  ngOnInit(): void {
    this.api.getAllMens().subscribe((data: any) => {
      this.allMens = data.result
      console.log(this.allMens);

    })
    this.api.searchKey.subscribe((data: any) => {
      this.searchTerm = data
      console.log(this.searchTerm);

    })
  }

  addToWishListMen(product: any) {
    this.api.addToWishListMen(product).subscribe((result: any) => {
        alert(result.message)
      },
      (result: any) => {
        alert(result.error.message)
      }
    )
  }

  addToCartListMen(product:any) {
  this.cart.addToCart(product)
  }
}
