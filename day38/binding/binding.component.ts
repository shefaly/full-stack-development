import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

firstname:string="Admin";
lastname:string="Admin";
age:number=28;
active:boolean=true;
gender:string="female";
country:string="India";
address:string="Hyderabad";


firstanme:string="Admin";
  constructor() { }

  ngOnInit(): void {
  }

}
