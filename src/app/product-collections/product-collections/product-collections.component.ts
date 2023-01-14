import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
//import { FormBuilder,FormArray, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-product-collections',
  templateUrl: './product-collections.component.html',
  styleUrls: ['./product-collections.component.scss']
})
export class ProductCollectionsComponent implements OnInit {
  productList:any
  filterForm:any
  selected:any
  list=[
    {id:1,name:'sss'}
  ]
  //private fb:FormBuilder

  constructor(private api:ApiService,private router:Router,) {
    this.api.getData().subscribe(data=>{
      console.warn(data)
      this.productList=data
    })
   }

  ngOnInit(): void {
    // this.filterForm=this.fb.group({
    //   category:[null],
    //   year:[null],
    // })
  }
  routeToDetails(data?:any){
      let url=`/jewel/product-collections/details/${data?.productName}`
      return this.router.navigate([url],{state : {data}})
  }
  

}
