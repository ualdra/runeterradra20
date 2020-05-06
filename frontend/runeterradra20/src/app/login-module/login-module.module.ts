import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModuleComponent } from './login-module.component';
import { LoginComponent } from '../login/login.component';
import { LoginRoutingModule } from './login-module-routing.module'
import { LoginService } from '../login.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from '../register/register.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    LoginModuleComponent,
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModuleModule { }
