import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  marks:number=35;
  myclass:string="";

  constructor() { 
    if(this.marks>=35){
    this.myclass="a1";
    }
    else{
      this.myclass="a2";
    }
  }

  ngOnInit(): void {
  }

}
