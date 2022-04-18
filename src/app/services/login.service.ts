import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {

  api = environment.baseUrl + '/login';

  constructor(private httpClient : HttpClient) { }

  logar(dadosLogin){
    return this.httpClient
          .post(this.api, dadosLogin)
          .pipe(
             map(
               (response: any) => {
                 localStorage.setItem('TOKEN', response.token);
                 return response;
               })
           );
  }
}
