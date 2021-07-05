import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FieldErrorMessageComponent } from './components/field-error-message/field-error-message.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [FieldErrorMessageComponent, HeaderComponent, ButtonComponent, TitleComponent],
  exports: [FieldErrorMessageComponent, HeaderComponent, ButtonComponent, TitleComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class SharedModule { }
