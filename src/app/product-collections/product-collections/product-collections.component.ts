import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-collections',
  templateUrl: './product-collections.component.html',
  styleUrls: ['./product-collections.component.scss']
})
export class ProductCollectionsComponent implements OnInit {
  productList:any
  list:any

  constructor(private api:ApiService,private router:Router) {
    this.api.getData().subscribe(data=>{
      console.warn(data)
      this.productList=data
    })
   }

  ngOnInit(): void {
  }
  routeToDetails(data?:any){
      let url=`/jewel/product-collections/details/${data?.productName}`
      return this.router.navigate([url],{state : {data}})
  }
  

}
