import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldErrorMessageComponent } from './components/field-error-message/field-error-message.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FieldErrorMessageComponent, HeaderComponent],
  exports: [FieldErrorMessageComponent, HeaderComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class SharedModule { }
