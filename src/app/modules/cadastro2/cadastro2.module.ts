import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cadastro2Component } from './cadastro2.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../../components/sharedcomponents/sharedcomponents.module';
import { CmailFormModule } from '../../components/cmailform/cmailform.module';

@NgModule({
  declarations: [
    Cadastro2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentsModule,
    CmailFormModule
  ],
  exports: [
    Cadastro2Component
  ]
})
export class Cadastro2Module { } 