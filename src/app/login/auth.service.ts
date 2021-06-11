import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;

  showLoginMenu = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(user: User) {
    if(user.email === 'user@email.com' && user.password === '123') {
      this.isAuthenticated = true;
      this.showLoginMenu.emit(true);

      this.router.navigate(['/']);
    } else {
      this.isAuthenticated = false;
    }
  }
}
