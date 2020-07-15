import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
marks:number=25;
x:boolean;
  constructor() {
    if(this.marks>=35){
      this.x=true;
    }
    else{
      this.x=false;
    }
   }

  ngOnInit(): void {
  }

}
