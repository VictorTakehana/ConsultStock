import { Component, OnInit } from '@angular/core';
import { DataStockService } from '../../services/data-stock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  stocks: { symbol: string, data: any }[] = []; 
  symbols: string[] = [];
  valueSearch: string = "";
  valueNotFound: boolean = false;
  constructor(private dataStockService: DataStockService){}

  ngOnInit(): void {
    this.getTopStocks('AAPL');
    setTimeout(()=>{
      this.getAllPrice()
    }, 500)
  }
  
  getAllPrice(){
    console.log(this.symbols)
    this.symbols.forEach(symbol => this.getCurrentPrice(symbol))
  }
  
  getCurrentPrice(symbol: string){
    this.dataStockService.getCurrentPrice(symbol).subscribe({
      next: (data) => {
        this.stocks.push ({ symbol, data})
      },
      error: (error) => {
        console.log("Error price", error)
      }
    })
  }
  
  getTopStocks(symbol: string) {
    this.dataStockService.getTopStocks(symbol).subscribe({
      next: (data) => {
        this.symbols = data;
      },
      error: (error) => {
        console.error('Error stocks:', error);
      }
    });
  }
  
  searchSymbol(){
    this.stocks = []
    this.getCurrentPrice(this.valueSearch)
  }
}
