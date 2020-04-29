import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModuleComponent } from './login-module.component';
import { LoginComponent } from '../login/login.component';
import { LoginRoutingModule } from './login-module-routing.module'
import { LoginService } from '../login.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginModuleComponent,
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModuleModule { }
