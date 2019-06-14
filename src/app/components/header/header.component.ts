import { Component } from "@angular/core";
import { PageDataService } from '../../services/page-data.service';

@Component({
    selector: 'cmail-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.css', './header-search.css']
})
export class HeaderComponent {

    tituloDaPagina = 'Cmail';

    constructor(private pageService: PageDataService) {
        this.pageService
            .titulo
            .subscribe(
                novoTitulo => this.tituloDaPagina = novoTitulo
            );
    }

    private _isMenuOpen = false;

    get isMenuOpen() {
        return this._isMenuOpen;
    }

    toggleMenu() {
        this._isMenuOpen = !this._isMenuOpen;
    }
}