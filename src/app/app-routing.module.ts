import { Routes, RouterModule, Router } from '@angular/router';
import { Cadastro2Component } from './modules/cadastro2/cadastro2.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';

const rotas: Routes = [
    { path: '', loadChildren: 'src/app/modules/login/login.module#LoginModule' },
    { path: 'inbox', loadChildren: 'src/app/modules/caixa-de-entrada/caixa-de-entrada.module#CaixaDeEntradaModule' , canActivate: [AuthGuard]},
    /* { path: 'inbox', component : CaixaDeEntradaComponent, canActivate: [AuthGuard]}, */
    { path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule'},
    { path: 'cadastro2', component: Cadastro2Component },
    { path: '**', redirectTo: 'inbox' }
];

/* export const ModuloRoteamento = RouterModule.forRoot(rotas); */
@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ],
    providers : [
        AuthGuard
    ]
})

export class ModuloRoteamento{}