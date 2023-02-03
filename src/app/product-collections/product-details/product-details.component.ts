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
  wishList: any=[];
  addToWishlist: boolean=false;
  productList: any;
  constructor(private api:ApiService,private router:Router,private util:UtilService) {
    
   }

  async ngOnInit(): Promise<void>  {
    this.currentProductDetails=history.state.data
    console.log(history.state)
    this.currentUserData=this.util.getCurrentUserData()
    this.cartList=this.util.getCartData()
    this.wishList=this.util.getWishlistData()
    await this.getAllProduct()
    // $('.product-details').animate({scrollTop:0});
  }
  subMenuOpen(id){
    $('#' + id).toggleClass('open').siblings().slideToggle(300);
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
      this.util.setObservable('addCartListCount',this.cartList/length)
    }
  
    this.router.navigate(['/jewel/cart'])
  }

  async BuyItNow(){
    await this.addToCart()
    this.router.navigate(['/jewel/customer-address'])
  }

  async addWishlist(){

    //orignal func
    this.addToWishlist=!this.addToWishlist
    if(this.addToWishlist){
      if(this.currentUserData){
        let existWishList=this.currentUserData.data.wishlistProductIdDetails
        if(existWishList.length){
          existWishList.forEach(e=>{
            this.productList.forEach(x=>{
              x['wishList']= e==x.productId || e==this.currentProductDetails.productId && !x['wishList'] ? true :false
            })
          })
        }else{
          this.productList.forEach(x=>{
            x['wishList']=false
          })
        }
        this.util.setObservable('currentUserData',this.currentUserData)
      }else{
        this.productList.forEach(x=>{
          x['wishList']= this.currentProductDetails.productId==x.productId && !x['wishList'] ? true :false
        })
      }
  
    }else{
      this.productList.forEach(x=>{
        x['wishList']= this.currentProductDetails.productId==x.productId && !x['wishList'] ? true :null
      })
    }
    this.util.setObservable('',this.productList)
    this.router.navigate(['/jewel/add-to-wishlist'])
  }

  async getAllProduct(){
    return this.api.getProductData().subscribe(async (data:any)=>{
      console.log(data)
      this.productList=data
      this.productList=this.productList.data
      this.productList.forEach(e=> e['wishList']=false)
    })
  }

}
