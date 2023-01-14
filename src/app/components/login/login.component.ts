import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailId:any
  passcode:any
  showForgot:any=false

  constructor() { }

  ngOnInit(): void {
  }

}
