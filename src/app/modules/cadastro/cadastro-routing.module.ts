import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro.component';

const rotasCadastro = [
    { path: '', component: CadastroComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(rotasCadastro)
    ],
    exports: [
        RouterModule
    ]
})

export class CadastroRoutingModule { }