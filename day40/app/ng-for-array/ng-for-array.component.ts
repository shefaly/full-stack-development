import { Component, OnInit } from '@angular/core';
import{Employee} from 'src/app/employee';
import { from } from 'rxjs';
@Component({
  selector: 'app-ng-for-array',
  templateUrl: './ng-for-array.component.html',
  styleUrls: ['./ng-for-array.component.css']
})
export class NgForArrayComponent implements OnInit {

  constructor() { }

employees:Employee[]=[
  new Employee(1,"shefaly",2027),
  new Employee(2,"vishwanath",2025),
  new Employee(3,"poojita",2052),
  new Employee(4,"aniketh",2065)

]

  ngOnInit(): void {
  }

}
