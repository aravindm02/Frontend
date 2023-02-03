import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-add-wishlist',
  templateUrl: './add-wishlist.component.html',
  styleUrls: ['./add-wishlist.component.scss']
})
export class AddWishlistComponent implements OnInit {
  currentUserData: any;
  wishListData: any;
  productCount:any=1
  totalAmt: number;
  productPolicies=[
    {Name:'Lifetime Plating Service'},
    {Name:'6 Month Warranty'},
    {Name:'30 Day Easy Returns'},
    {Name:'Free Shipping'}
  ]
  cartList: any=[];

  constructor(private api:ApiService,private router:Router,private util:UtilService) { }

  ngOnInit(): void {
    this.currentUserData=this.util.getCurrentUserData()
    let data=this.util.getWishlistData()
    this.wishListData=[]
    data.forEach(e=>{
      e.wishList ? this.wishListData.push(e) : null
    })
  }


  deleteProduct(list){
    let index=this.wishListData.findIndex(e=>e.productId==list.productId)
    this.wishListData.splice(index,1)
  }

  addToCart(row){
    if(this.currentUserData){
      let existCart=this.currentUserData.data.cartProductDetails
      if(existCart.length){
        existCart.forEach(e=>{
          if(e.productId==row.productId){
             e['quantity']+=1
          }else{
            existCart.push({
              "productId":   row.productId,
              "quantity": 1,
              "_id":  row.productId
          })
          }
        })
      }else{
        existCart.push({
          "productId":   row.productId,
          "quantity": 1,
          "_id":   row.productId
      })
      }
      existCart=this.util.unique(existCart,['_id'])
      this.util.setCurrentUserData(this.currentUserData)
    }else{
      if(this.cartList.length){
        this.cartList.forEach(e=>{
          if(e.productId==row.productId){
             e['quantity']+=1
          }else{
           return this.cartList.push({
              "data": row,
              "quantity": 1,
              "_id":   row.productId
          })
          }
        })
      }else{
        this.cartList.push({
          "data":row,
          "quantity": 1,
          "_id": row.productId
      })
      }
      this.cartList=this.util.unique(this.cartList,['_id'])
      this.util.setCartData(this.cartList)
    }
  
    this.router.navigate(['/jewel/cart'])
  }



}
