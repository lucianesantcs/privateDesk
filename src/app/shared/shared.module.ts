import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FieldErrorMessageComponent } from './components/field-error-message/field-error-message.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [FieldErrorMessageComponent, HeaderComponent, ButtonComponent],
  exports: [FieldErrorMessageComponent, HeaderComponent, ButtonComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class SharedModule { }
