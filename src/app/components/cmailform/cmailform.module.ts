import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmailFormGroupComponent } from '../cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from '../cmail-form-group/cmail-form-fiel.directive';

@NgModule({
  declarations: [
    CmailFormGroupComponent,
    CmailFormFieldDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CmailFormGroupComponent,
    CmailFormFieldDirective
  ]
})
export class CmailFormModule { }
