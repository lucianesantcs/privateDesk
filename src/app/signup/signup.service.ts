import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }

  showMessage(message: string): void {
    alert(message);
  }
}
