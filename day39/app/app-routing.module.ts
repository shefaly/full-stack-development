import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BindingComponent } from './binding/binding.component';
import { Binding1PropertyComponent } from './binding1-property/binding1-property.component';
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
