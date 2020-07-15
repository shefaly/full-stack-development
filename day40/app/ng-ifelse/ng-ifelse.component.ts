import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-ifelse',
  templateUrl: './ng-ifelse.component.html',
  styleUrls: ['./ng-ifelse.component.css']
})
export class NgIfelseComponent implements OnInit {

  marks:number=13;
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
