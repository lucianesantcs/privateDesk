import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppRoutingModule } from './app.routing.module';
import { NotesModule } from './notes/notes.module';
import { FinancesModule } from './finances/finances.module';
import { AuthService } from './login/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './shared/guards/auth-guard';
import { FieldErrorMessageComponent } from './shared/components/field-error-message/field-error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FieldErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    NotesModule,
    FinancesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
