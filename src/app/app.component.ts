import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataStockService } from './services/data-stock.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  currentPrice: any;
  acao: string = "";

  constructor(private dataStockService: DataStockService){}

  ngOnInit(): void {
  }
  button(){
    console.log(this.acao)
    this.getCurrentPrice(this.acao)
  }
  getCurrentPrice(name: string){
    this.dataStockService.getCurrentPrice(name).subscribe({
      next: (data) => {
        this.currentPrice = data
        console.log("VALOR STOCK:", this.currentPrice)
      },
      error: (error) => {
        console.log("erro", error)
      }
    })
  }
}
