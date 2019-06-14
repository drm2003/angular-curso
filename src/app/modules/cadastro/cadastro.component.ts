import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponse, HttpResponseBase, HttpErrorResponse } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { PageDataService } from '../../services/page-data.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  mensagensErro;

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('\\d{4,5}-?\\d{4}')]),
    avatar: new FormControl('', Validators.required, this.validaImagem.bind(this)),
  })
  constructor(private httpClient: HttpClient, 
              private roteador: Router, 
              private pageService: PageDataService) { }

  ngOnInit() {
    this.pageService
        .defineTitulo('Cadastro de Usuários - CMail');
  }

  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {
      const userData = new User(this.formCadastro.value);

      this.httpClient.
        post(
          'http://localhost:3200/users', userData
        ).subscribe(
          () => {
            console.log(`Cadastrado com sucesso.`);
            this.mensagensErro = [];
            this.formCadastro.reset();

            // após 1 segundo faz o redirecionamento da rota para login
            setTimeout(() => {
              this.roteador.navigate[''];
            }, 1000);

          }, (responseError: HttpErrorResponse) => {
            //resposta caso existam erros!
            this.mensagensErro = responseError.error.body;
          }
        )
    } else {
      this.validarTodosOsCamposDoFormulario();
    }
  }

  validarTodosOsCamposDoFormulario() {
    const form = this.formCadastro;
    /* Object.keys(form.controls).forEach(field =>{
      const control = form.get(field);
      control.markAsTouched({ onlySelf: true })
    }); */
    form.markAllAsTouched();
  }

  validaImagem(campoDoFormulario: FormControl) {
    /* return new Promise(resolve => resolve()); */
    return this.httpClient.
      head(campoDoFormulario.value, { observe: 'response' }).
      pipe(
        map(
          (response: HttpResponseBase) => {
            return response.ok ? null : { urlInvalida: true }
          }
        ),
        catchError(
          (error) => {
            return [{ urlInvalida: true }];
          }
        )
      )
  }
}