import { Routes, RouterModule } from "@angular/router";
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { NgModule } from '@angular/core';

const rotasInbox : Routes = [
    {path: '', component: CaixaDeEntradaComponent },
];

@NgModule({
    imports:[
        RouterModule.forChild(rotasInbox)
    ],
    exports : [
        RouterModule
    ]
})

export class CaixaDeEntradaRoutingModule{}