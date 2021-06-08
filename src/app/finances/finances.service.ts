import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Finances } from './finances.model';

@Injectable({
  providedIn: 'root'
})
export class FinancesService {
  
  baseUrl = 'http://localhost:3000/financas';

  constructor(private http: HttpClient) { }

  showMessage(message: string): void {
    alert(message);
  }
  
  createFinance(finance: Finances): Observable<Finances> {
    return this.http.post<Finances>(this.baseUrl, finance);
  }

  getFinances(): Observable<Finances> {
    return this.http.get<Finances>(this.baseUrl);
  }

}
