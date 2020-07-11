import { Component, OnInit } from '@angular/core';
import{ThrowStmt} from '@angular/compiler';
import{FormsModule} from '@angular/forms';
@Component({
  selector: 'app-binding1-property',
  templateUrl: './binding1-property.component.html',
  styleUrls: ['./binding1-property.component.css']
})
export class Binding1PropertyComponent implements OnInit {




  constructor() { }
     firstname:string="shefalyKasam";
     lastname:string="GITAM";
     age:number=21;
     active:boolean=true;
     gender:string="female";
     country:string="India";


  ngOnInit(): void {
  }

  ChangeData(){
    this.firstname="uma";
    this.lastname="rao";
    this.age=34;
    this.active=false;
    this.gender="feamle";
    this.country="India";
  }
}
