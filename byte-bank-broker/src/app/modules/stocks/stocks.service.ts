import { Injectable } from '@angular/core';
import { Stock } from './components/stock.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  constructor(private httpClient: HttpClient) {}

  getStocks() {
    return this.httpClient.get<Stock[]>('http://localhost:3000/stocks');
  }
}
