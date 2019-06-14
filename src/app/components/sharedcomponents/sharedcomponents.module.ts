import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { CmailListItemComponent } from '../cmail-list-item/cmail-list-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CmailListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CmailListItemComponent
  ]
})
export class SharedComponentsModule { }
