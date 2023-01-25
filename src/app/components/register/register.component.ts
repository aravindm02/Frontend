import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstName:any
  lastName:any
  emailId:any
  passcode:any
  registerForm: any;
  numberRegEx = /\-?\d*\.?\d{1,2}/;
  loginStatus: Object;
  showVerifyOtp: boolean;
  constructor(private formBuilder: FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName:[null],
      lastName:[null],
      phoneNo:[null,[Validators.maxLength(10),Validators.pattern(this.numberRegEx)]],
      emailId:[null,[Validators.email]],
      passcode:[null],
    })
  }
  newRegister(){
    let form=this.registerForm.getRawValue()
    this.showVerifyOtp=true
    let body={
      "customerName":`${form.firstName} ${form.lastName}`,
      "phoneNumber":Number(form.phoneNo),
      "password":form.passcode,
      "email":form.emailId,
      "customerAddress":"",
      "wishlistProductDetails":null,
      "orderHistory":null  
    }
    this.api.CustomerSignUp(body).subscribe(async data=>{
      // this.showVerifyOtp=true
      console.log(data)
    })
  
    let val=form.otp
    this.api.verifyOTP(val).subscribe(async data=>{
      // this.showVerifyOtp=true
      console.log(data)
    })


  }

}
