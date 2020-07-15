import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BindingComponent } from './binding/binding.component';
import { Binding1PropertyComponent } from './binding1-property/binding1-property.component';
import { CsspropertyComponent } from './cssproperty/cssproperty.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgIfelseComponent } from './ng-ifelse/ng-ifelse.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForArrayComponent } from './ng-for-array/ng-for-array.component';


const routes: Routes = [
  {
path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegistrationComponent
  },
  {
  path:'binding',component:BindingComponent
},
{
  path:'binding1',component:Binding1PropertyComponent
},
{
path:'css',component:CsspropertyComponent
},
{
path:'ngclassex',component:NgClassComponent
},
{
  path:'ngif-ex',component:NgIfComponent
},
{
  path:'if-else',component:NgIfelseComponent
},
{
  path:'for',component:NgForComponent
},
{
  path:'emp',component: NgForArrayComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
