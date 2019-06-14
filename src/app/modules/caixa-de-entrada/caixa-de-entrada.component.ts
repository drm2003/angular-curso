import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../../email.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PageDataService } from '../../services/page-data.service';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css'],
  styles: [`
    ul, li{
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
  `]
})
export class CaixaDeEntradaComponent implements OnInit {
  private _isNewEmailFormOpen = false;
  emailList = [];
  mensagemErro;

  email = {
    destinatario: '',
    assunto: '',
    conteudo: '',
    dataDeEnvio: ''
  }

  constructor(private emailService: EmailService, private pageService: PageDataService) { }

  ngOnInit() {
    this.emailService
      .listar()
      .subscribe(
        lista => {
          this.emailList = lista;
        }
        , (responseError) => {
          this.mensagemErro = responseError.message;
        }
      );

    this.pageService
        .defineTitulo('Caixa de entrada - CMail');
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleIsNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm) {
    if (formEmail.invalid) {
      return;
    }

    this.emailService
      .enviar(this.email)
      .subscribe(
        emailApi => {
          //fazemos todas as outras operações após o OK da API
          this.emailList.push(emailApi);

          this.email = {
            destinatario: '',
            assunto: '',
            conteudo: '',
            dataDeEnvio: ''
          }
        }
        , erro => {
          console.error(erro);
        });
    formEmail.reset();
  }

  /*  handleNewEmail(formEmail: NgForm) {
     if (formEmail.invalid) {
       return;
     }
 
     this.emailList.push(this.email);
 
     this.email = {
       destinatario: '',
       assunto: '',
       conteudo: ''
     }
 
     formEmail.reset();
   } */

  handleRemoveEmail(eventoVaiRemover, emailId) {
    console.log(eventoVaiRemover);
    if (eventoVaiRemover.status === 'removing') {
      //o próximo passo é agar da API!
      this.emailService
        .deletar(emailId)
        .subscribe(
          res => {
            console.log(res);
            this.emailList = this.emailList.filter(email => email.id != emailId);
          }
          , err => console.log(err)
        )
    }
  }

}
