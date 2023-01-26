import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProductData(){
    let url='https://dead-puce-quail-tux.cyclic.app/Product/getProduct';
    return this.http.get(url);
  }
  CustomerLogin(body){
    let url='https://ecommerce-azys.onrender.com/Customer/loginCustomer';
    return this.http.post(url,body);
  }
  CustomerLoginForget(body){
    let url='https://ecommerce-azys.onrender.com/Customer/forgetPassword';
    return this.http.post(url,body);
  }
  CustomerSignUp(body){
    let url='https://ecommerce-azys.onrender.com/Customer/customerSignup';
    return this.http.post(url,body);
  }
  CustomerUpdateLogin(body){
    let url='https://ecommerce-azys.onrender.com/Customer/updateCustomer';
    return this.http.post(url,body);
  }
  verifyOTP(otp){
    let url=`https://ecommerce-azys.onrender.com/Customer/verifyCustomerOtp/${otp}`;
    return this.http.get(url);
  }
}
