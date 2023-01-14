import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  searchText:any
  emailId:any
  productList:any
  list:any
  
  constructor(private api:ApiService,private router:Router) {
    // this.api.getData().subscribe(data=>{
    //   console.warn(data)
    //   this.productList=data
    // })
   }

  ngOnInit(): void {
  }
  toggleSearchBar(){
    // $("enlist-srch").removeClass('enlist-srch')
    
  }
  search(event?:any){
    let searchValue = event.target.value.toLowerCase()
    // if(searchValue) $(".search-expand").addClass('open')
    // else $(".search-expand").removeClass('open')
  }


}
