import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { ApiService } from '../services/api.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-login-security',
  templateUrl: './login-security.component.html',
  styleUrls: ['./login-security.component.scss']
})
export class LoginSecurityComponent implements OnInit {
  detailsForm: any;
  currentDate: string;
  editForm:any
  currentUserData: any;
  showView: boolean;

  constructor(private formBuilder: FormBuilder,private api:ApiService,private router:Router,private util:UtilService) { }

   ngOnInit(): void {
    this.currentDate = new Date().toISOString().slice(0, 10);
    let body={
      "email":'aravindaravi58@gmail.com',
      "password":'Aravind123'
    }
    this.api.CustomerLogin(body).subscribe(async (data:any)=>{
      this.currentUserData=data
      this.detailsForm= this.util.getForm('customerDetails',this.currentUserData.data)
      this.showView=true
    })
        // this.currentUserData=this.util.getCurrentUserData()

    // this.currentUserData=this.util.getCurrentUserData().subscribe(res=>{
    //   this.detailsForm= this.util.getForm('customerDetails',res.data)
    // })
  }
  updateCustomer(){
    let body=this.currentUserData.data
    let form=this.detailsForm.getRawValue()
    body['firstName']=form.firstName
    body['lastName']=form.lastName
    body['gender']=form.gender
    body['dateOfBirth']=form.dob
    body['phoneNumber']=form.phoneNo
    body['email']=form.emailId
    body['password']=form.passcode
    // this.api.CustomerUpdateLogin(body).subscribe(async (data:any)=>{
    //   this.util.setCurrentUserData(data.data)
    //   console.log("updated Succesfully",data)
    // })

  }

  setGender(type){
    // let value = type == 'yes' ? true : false
    this.detailsForm.get('gender').setValue(type)
  }
  getDOB(event){
    let val=event.target.value
    this.detailsForm.get('dob').setValue(val)

  }


}
