import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cssproperty',
  templateUrl: './cssproperty.component.html',
  styleUrls: ['./cssproperty.component.css']
})
export class CsspropertyComponent implements OnInit {

marks:number=80;
mycolor:string= "";


  constructor() {
    if(this.marks>=35){
      this.mycolor="green";
    }
    else{
      this.mycolor="red";
    }
   }

  ngOnInit(): void {
  }

}
