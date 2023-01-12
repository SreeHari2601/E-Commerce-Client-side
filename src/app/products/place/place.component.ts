import { HttpClient } from '@angular/common/http';
import { Component,OnInit,HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  addressLine1:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*")]],
  addressLine2:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*")]],
  phone:['',[Validators.required,Validators.pattern("[0-9]*")]],
  email:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*")]]
 })

  constructor  (private fb :FormBuilder,private router:Router,private http :HttpClient)  { }
   ngOnInit(): void {
     
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
}
