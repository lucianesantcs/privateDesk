import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { NotesModule } from '../notes/notes.module';
import { FinancesModule } from '../finances/finances.module';



@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule, SharedModule, NotesModule, FinancesModule, RouterModule
  ]
})
export class HomeModule { }
