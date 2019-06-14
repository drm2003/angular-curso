import { AppComponent } from './app.component';
import { SharedComponentsModule } from './components/sharedcomponents/sharedcomponents.module';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CmailFormModule } from './components/cmailform/cmailform.module';
import { Cadastro2Module } from './modules/cadastro2/cadastro2.module';
import { ModuloRoteamento } from './app-routing.module';
import { CmailListItemComponent } from './components/cmail-list-item/cmail-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CmailListItemComponent
  ],
  imports: [
    BrowserModule,  //é obrigatório encontra-se no raiz
    ModuloRoteamento,
    HttpClientModule,
    SharedComponentsModule,
    Cadastro2Module
  ],
  providers: [
     {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
