import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStockService {
  private key: string = "crr0pe9r01qq1umo9r30crr0pe9r01qq1umo9r3g"
  private baseUrl: string = "https://finnhub.io/api/v1"

  constructor(private http: HttpClient) {}

  getCurrentPrice(name: string): Observable<any>{
    const url = `${this.baseUrl}/quote?symbol=${name}&token=${this.key}`;
    return this.http.get<any>(url);
  }
  getTopStocks(symbol: string): Observable<string[]> {
    const url = `${this.baseUrl}/stock/peers?symbol=${symbol}&token=${this.key}`
    return this.http.get<string[]>(url);
  }
}