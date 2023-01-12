import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../products/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = this.fb.group({
    username:["",[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    password:["",[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

   constructor (private fb :FormBuilder, private route : Router , private api : ApiService) { } 
  
   ngOnInit(): void {
    
   }   
   login(){
    if (this.loginForm.valid){
      let username = this.loginForm.value.username
    
      let password = this.loginForm.value.password
      
      this.api.login(username,password).subscribe((result:any)=>{
        console.log(result);
        alert(result.message)
      },
      (result:any)=>{
        this.route.navigateByUrl("/products")
      }
      )
    }
    
    else {
      alert("Please fill Credentials")
    }
  
   }
}
