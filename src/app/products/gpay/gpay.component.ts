import { Component } from '@angular/core';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.css']
})
export class GpayComponent {
  title= "AngularGooglePay";
  buttonColor = "black";
  buttonType="buy";
  isCustomSize = 250;
  buttonHeight=50;
  isTop = window == window.top;

  paymentRequest = {
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethods:[
   {   type:"CARD",
       parameters : {
        allowedPaymentMethod:["PAN_ONLY","CRYPTOGRAM_3DS"],
        allowedCardNetworks:["AMEX","VISA","MASTERCARD"]
       },
       tokenization:{
        type:"PAYMENT_GATEWAY",
        parameter:{
          gateway:"example",
          gatewayMerchantI:"exapmleGatewayMerchant"
        }
       } 

   }
    ],
    merchantInfo:{
      merchantId:"123456789123456789",
      merchantName:"demo Merchant"
    },
    transactionInfo:{
      totalPriceStatus:"FINAL",
      totalPriceLabel:"Total",
      totalPrice:"100",
      currencyCode:"USD",
      countryCode:"US"
    }
  }
  onLoadPaymentData(event:any): void {
    console.log("Load payment Data", event.detail);
    
  }
}
