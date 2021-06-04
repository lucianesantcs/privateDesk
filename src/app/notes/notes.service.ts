import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notes } from './notes.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseUrl = 'http://localhost:3000/notas';

  constructor(private http: HttpClient) { }

  showMessage(message: string): void {
    alert(message);
  }

  createNote(note: Notes): Observable<Notes> {
    return this.http.post<Notes>(this.baseUrl, note);
  }

  getNotes(): Observable<Notes> {
    return this.http.get<Notes>(this.baseUrl);
  }
}
