import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailId:any
  passcode:any
  showForgot:any=false

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  signIn(){
    if(!this.showForgot){
      let body={
        "email":this.emailId,
        "password":this.passcode
      }
      this.api.CustomerLogin(body).subscribe(async data=>{
        
        console.log(data)
      })
    }else{
      let body={
        "email": this.emailId
      }
      this.api.CustomerLoginForget(body).subscribe(async data=>{
        console.log(data)
      })
    }

  }

}
