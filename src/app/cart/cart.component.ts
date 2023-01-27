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
  productCount:any
  totalAmt: number;

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
  deleteProduct(list){
    let index=this.cartListData.findIndex(e=>e.productId==list.productId)
    this.cartListData.splice(index,1)
  }

}
