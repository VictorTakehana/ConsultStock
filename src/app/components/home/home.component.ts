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
  errorMessage: string = "";
  isAscendingSymbol: boolean = true;
  isAscendingPrice: boolean = true;
  isAscendingChange: boolean = true;


  constructor(private dataStockService: DataStockService){}

  ngOnInit(): void {
    this.getTopStocks('AMZN');
    setTimeout(()=>{
      this.getAllPrice()
    }, 500)
  }
  
  getAllPrice(){
    this.symbols.forEach(symbol => this.getCurrentPrice(symbol))
  }
  
  getCurrentPrice(symbol: string){
    this.errorMessage = ''
    this.dataStockService.getCurrentPrice(symbol).subscribe({
      next: (data) => {
        this.stocks.push ({ symbol, data})
        if(data.c == 0 && data.d == null){
          this.valueNotFound = true
        }else{
          this.valueNotFound = false
        }
      },
      error: (error) => {
        console.log(error)
        this.errorMessage = `Error price: ${symbol}`
      }
    })
  }
  
  getTopStocks(symbol: string) {
    this.errorMessage = ''
    this.dataStockService.getTopStocks(symbol).subscribe({
      next: (data) => {
        this.symbols = data;
      },
      error: (error) => {
        console.log(error)
        this.errorMessage = `Error stock: ${symbol}`
      }
    });
  }
  
  searchSymbol(){
    this.stocks = []
    this.getCurrentPrice(this.valueSearch)
    this.valueSearch = ''
  }
  sortSymbol(){
    if(this.isAscendingSymbol){
      this.stocks.sort((a, b) => a.symbol.localeCompare(b.symbol))
    }else{
      this.stocks.sort((a, b) => b.symbol.localeCompare(a.symbol))
    }
    this.isAscendingSymbol = !this.isAscendingSymbol
  }
  sortPrice(){
    if(this.isAscendingPrice){
      this.stocks.sort((a, b) => a.data.c - b.data.c)
    }else{
      this.stocks.sort((a, b) => b.data.c - a.data.c)
    }
    this.isAscendingPrice = !this.isAscendingPrice
  }
  sortChange(){
    if(this.isAscendingChange){
      this.stocks.sort((a, b) => a.data.dp - b.data.dp)
    }else{
      this.stocks.sort((a, b) => b.data.dp - a.data.dp)
    }
    this.isAscendingChange = !this.isAscendingChange
  }
}
