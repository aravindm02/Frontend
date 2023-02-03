import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  currentUserData: any;
  cartListData: any;
  productCount:any=1
  totalAmt: number;
  productPolicies=[
    {Name:'Lifetime Plating Service'},
    {Name:'6 Month Warranty'},
    {Name:'30 Day Easy Returns'},
    {Name:'Free Shipping'}
  ]


  constructor(private api:ApiService,private router:Router,private util:UtilService) { }

  ngOnInit(): void {
    this.currentUserData=this.util.getCurrentUserData()
    this.cartListData=this.util.getCartData()

    let val=0
    this.cartListData.forEach(e=>{
      val+= e.data.discountPrice
    })
    this.totalAmt=val
  }
  itemPlus(){
    this.productCount +=1
  }
  itemMinus(){
    this.productCount <= 1 ?   this.productCount = 1 : this.productCount -=1
  }
  setQuantity(event,data){
    let val=event.target.value
    this.cartListData.map(e=>{
      if(e.productId==data.productId){
        e['quantity']=val
      }
    })
  }

  deleteProduct(list){
    let index=this.cartListData.findIndex(e=>e.productId==list.productId)
    this.cartListData.splice(index,1)
  }
  routeToNext(){
    this.router.navigate(['/jewel/customer-address'])
  }

}
