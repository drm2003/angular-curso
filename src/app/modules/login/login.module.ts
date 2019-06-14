import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CmailFormModule } from '../../components/cmailform/cmailform.module';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CmailFormModule, 
    FormsModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [LoginService]
})
export class LoginModule { }
