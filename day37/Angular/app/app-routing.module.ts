import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ShefalyGitamComponent} from './shefaly-gitam/shefaly-gitam.component';


const routes: Routes = [
  {
path:'test',component:ShefalyGitamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
