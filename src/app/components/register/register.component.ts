import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
