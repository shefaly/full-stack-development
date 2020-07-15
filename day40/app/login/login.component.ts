import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="";
password:string="";
msg:string="";
title="Login page render here";
  constructor() { 

  }
  ngOnInit(): void {
  }

CheckLogin(){
if(this.username == "admin"&&this.password == "admin"){
  this.msg="Successful Login";
}
else{
  this.msg="Unsuccessful Login";
}
}

}
