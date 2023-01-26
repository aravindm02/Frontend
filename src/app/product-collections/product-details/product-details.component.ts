import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.currentProductDetails=history.state.data
    console.log(history.state)
    // $('.product-details').animate({scrollTop:0});
  }
  subMenuOpen(id){
    $('#' + id).toggleClass('open').children().slideToggle(300);
  }

}
