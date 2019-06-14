import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Email } from './models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  api = environment.baseUrl + '/emails';
  cabecalho = new HttpHeaders({ 'Authorization': localStorage.getItem('TOKEN') });

  constructor(private http: HttpClient) { }

  enviar({destinatario, assunto, conteudo}) {
    const emailApi = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    };

    return this.http
      .post(this.api, emailApi, { headers: this.cabecalho })
      .pipe<Email>(
        map(
          (emailApi: any) => {
            return new Email(
              {
                destinatario: emailApi.to,
                assunto: emailApi.subject,
                conteudo: emailApi.content,
                dataDeEnvio: emailApi.created_at,
                id: emailApi.id
              }
            )
          }
        )
      )
  }

  listar(){
    return this.http
            .get(this.api, { headers: this.cabecalho})
            .pipe<Email[]>(
              map(
                (response: any[]) =>{
                  return response
                         .map(
                           emailApi => new Email({
                             destinatario: emailApi.to,
                             assunto: emailApi.subject,
                             conteudo: emailApi.content,
                             dataDeEnvio: emailApi.created_at,
                             id: emailApi.id
                           })
                         )
                }
              )
            )
  }

  deletar(id){
    return this
            .http
            .delete(`${this.api}/${id}`, { headers : this.cabecalho })
  }
}