import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { StocksComponent } from './components/stocks/stocks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StocksComponent],
  imports: [
    CommonModule,
    StocksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class StocksModule {}
