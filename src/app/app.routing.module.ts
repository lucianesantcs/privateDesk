import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancesComponent } from './finances/finances.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth-guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },    
    {
        path: 'signup',
        component: SignupComponent
    },    
    {
        path: 'finances',
        component: FinancesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}