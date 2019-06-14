import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../../components/sharedcomponents/sharedcomponents.module';
import { CmailFormModule } from '../../components/cmailform/cmailform.module';
import { CadastroRoutingModule } from './cadastro-routing.module';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    CmailFormModule,
    CadastroRoutingModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
