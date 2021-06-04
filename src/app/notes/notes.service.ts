import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  showMessage(message: string): void {
    alert(message);
  }
}
