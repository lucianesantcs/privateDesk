import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../login/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  baseUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  showMessage(message: string): void {
    alert(message);
  }
  
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }
}
