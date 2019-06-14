import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { SharedComponentsModule } from '../../components/sharedcomponents/sharedcomponents.module';
import { FormsModule } from '@angular/forms';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';

@NgModule({
  declarations: [
    CaixaDeEntradaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentsModule,
    CaixaDeEntradaRoutingModule
  ],
  exports : [
    CaixaDeEntradaComponent
  ]
})
export class CaixaDeEntradaModule { }