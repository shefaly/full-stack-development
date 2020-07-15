import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShefalyGitamComponent } from './shefaly-gitam/shefaly-gitam.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ShefalyGitamComponent,
    LoginComponent,
    RegistrationComponent,
    BindingComponent,
    Binding1PropertyComponent,
    CsspropertyComponent,
    NgClassComponent,
    NgIfComponent,
    NgIfelseComponent,
    NgForComponent,
    NgForArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
