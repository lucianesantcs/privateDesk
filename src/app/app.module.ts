import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotesComponent } from './notes/notes.component';
import { FinancesComponent } from './finances/finances.component';
import { AddNotesComponent } from './notes/add-notes/add-notes.component';
import { PrivateNotesComponent } from './notes/private-notes/private-notes.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NotesComponent,
    FinancesComponent,
    AddNotesComponent,
    PrivateNotesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
