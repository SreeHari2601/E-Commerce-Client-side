import { HttpClient } from '@angular/common/http';
import { Component,OnInit,HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  
//

 confirmForm = this.fb.group({
  firstName:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*")]],
  lastName:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*")]],
  addressLine1:['',[Validators.required,Validators.pattern("[a-zA-Z]*")]],
  addressLine2:['',[Validators.required,Validators.pattern("[a-zA-Z]*")]],
  phone:['',[Validators.required,Validators.pattern("[0-9]*")]],
  email:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*")]]
 })
 
  constructor  (private fb :FormBuilder,private router:Router,private http :HttpClient,private cart:CartService)  { }
  GrandTotal:number=0
  strikeCheckout:any = null; 
  ngOnInit(): void {
    this.stripePaymentGateway();
    this.GrandTotal = this.cart.getTotal()
   }

   confirm() {
    this.confirmForm.get("firstName")?.errors
    this.confirmForm.get("lastName")?.errors
    this.confirmForm.get("addressLine1")?.errors
    this.confirmForm.get("addressLine2")?.errors
    this.confirmForm.get("phone")?.errors
    this.confirmForm.get("email")?.errors
    if(this.confirmForm.valid){
      this.router.navigateByUrl("products/confirm")
    }else {
      alert("Please enter Your Credentials ")
    }
    let firstName= this.confirmForm.value.firstName
    let lastName= this.confirmForm.value.lastName
    let addressLine1= this.confirmForm.value.addressLine1
    let addressLine2= this.confirmForm.value.addressLine2
    let phone= this.confirmForm.value.phone
    let email= this.confirmForm.value.email
    console.log(firstName);
   
   }
   checkout(amount:any) {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51ML3kcSCIwfCBTR1F6SHCfwRE4nT2slZNjNhyMtBL4S5h0sNIsGMPFM2Hw72GDYVZHtpO9gxlhjnR4qrA21k9aLE00n9cOGScA',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Payment Successfull!');
        

      }
    });
  
    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: this.GrandTotal
    });
  }
  
  stripePaymentGateway() {
    if(!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_12239293949ksdfksdjkfj1232q3jkjssdfjk',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
          }
        });
      }
        
      window.document.body.appendChild(scr);
    }
  }
}
