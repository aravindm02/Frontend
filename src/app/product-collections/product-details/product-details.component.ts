import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  currentProductDetails:any
  productPolicies=[
    {img:'assets/lifetime_service.webp',Name:'Lifetime Plating Service'},
    {img:'assets/warranty.png',Name:'6 Month Warranty'},
    {img:'assets/returns.avif',Name:'30 Day Easy Returns'},
    {img:'assets/free_shipping.webp',Name:'Free Shipping'}
  ]
  currentUserData: any;
  cartList: any=[];
  constructor(private api:ApiService,private router:Router,private util:UtilService) {
    
   }

  ngOnInit(): void  {
    this.currentProductDetails=history.state.data
    console.log(history.state)
    this.currentUserData=this.util.getCurrentUserData()
    this.cartList=this.util.getCartData()
    // $('.product-details').animate({scrollTop:0});
  }
  subMenuOpen(id){
    $('#' + id).toggleClass('open').children().slideToggle(300);
  }

  addToCart(){
    if(this.currentUserData){
      let existCart=this.currentUserData.data.cartProductDetails
      if(existCart.length){
        existCart.forEach(e=>{
          if(e.productId==this.currentProductDetails.productId){
             e['quantity']+=1
          }else{
            existCart.push({
              "productId":   this.currentProductDetails.productId,
              "quantity": 1,
              "_id":   this.currentProductDetails.productId
          })
          }
        })
      }else{
        existCart.push({
          "productId":   this.currentProductDetails.productId,
          "quantity": 1,
          "_id":   this.currentProductDetails.productId
      })
      }
      existCart=this.util.unique(existCart,['_id'])
      this.util.setCurrentUserData(this.currentUserData)
    }else{
      if(this.cartList.length){
        this.cartList.forEach(e=>{
          if(e.productId==this.currentProductDetails.productId){
             e['quantity']+=1
          }else{
           return this.cartList.push({
              "data": this.currentProductDetails,
              "quantity": 1,
              "_id":   this.currentProductDetails.productId
          })
          }
        })
      }else{
        this.cartList.push({
          "data": this.currentProductDetails,
          "quantity": 1,
          "_id":   this.currentProductDetails.productId
      })
      }
      this.cartList=this.util.unique(this.cartList,['_id'])
      this.util.setCartData(this.cartList)
    }
  
    this.router.navigate(['/jewel/cart'])
  }

}
