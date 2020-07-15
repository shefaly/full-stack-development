import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username:string="";
  email:string="";
  password:string="";
  msg:string="";

  constructor() { }

  ngOnInit(): void {
  }
  CheckRegs(){
    if(this.username==""||this.email==""||this.password==""){
      this.msg="please fill the forms";
    }
    }
    }

