import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule, RouterModule, SharedModule, ReactiveFormsModule, FormsModule
  ]
})
export class LoginModule { }
