import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
constructor (private Route :Router) {}
ngOnInit(): void {
  
}
shoe() {
  this.Route.navigateByUrl("products/shoes")
}


mens() {
  this.Route.navigateByUrl("products/mens")
}

womens () {
  this.Route.navigateByUrl("products/womens")
}

go() {
  this.Route.navigateByUrl("products/shoes")
}

}
