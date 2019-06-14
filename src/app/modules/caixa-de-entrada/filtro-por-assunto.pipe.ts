import { Pipe } from '@angular/core';
import { Email } from '../../models/email';

@Pipe({
    name: 'filtroPorAssunto'
})
export class FiltroPorAssunto{
    transform(listaEmails: Email[], termoFiltro: string){
        return listaEmails
                .filter(
                    email => email.assunto.toLowerCase()
                    .includes(termoFiltro.toLowerCase())
                )
    }
}