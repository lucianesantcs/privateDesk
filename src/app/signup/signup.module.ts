import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SignupComponent],
  exports: [SignupComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, SharedModule],
})
export class SignupModule {}
