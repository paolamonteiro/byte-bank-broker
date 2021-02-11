import { Injectable } from '@angular/core';
import { Stock } from './components/stock.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  public API_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getStocks() {
    return this.httpClient.get<Stock[]>(`${this.API_URL}/stocks`);
  }
}
