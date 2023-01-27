import { Injectable } from '@angular/core';
import { StaticValues } from 'src/app/static/staticValues';
import { FormService } from './form.service';


@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private constValues = StaticValues.values;
  currentUserData: any;
  cartData: any=[];
  constructor(
    private form :FormService,
  ) { }

  setCurrentUserData(userData:any){
    this.currentUserData = userData;
  }

  getCurrentUserData(){
    return this.currentUserData;
  }

  setCartData(data:any){
    this.cartData = data;
  }
  getCartData(){
    return this.cartData;
  }


  getStatic(target, key?: any) {
    return key ? this.constValues[target][key] : this.constValues[target];
}

  // get unique based on property
  unique(arr, keyProps) {
    const kvArray = arr.map(entry => {
    const key = keyProps.map(k => entry[k]).join('|');
    return [key, entry];
    });
    const map = new Map(kvArray);
    return Array.from(map.values());
}
// Form service
getForm(type, data?: any) {
  return this.form.getForm(type, data);
}
}
