import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  textClass: string = '';

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.updateTextClass()
    })
    this.updateTextClass()
    console.log(this.textClass)
  }
  updateTextClass(){
    const currentUrl = this.router.url
    switch (currentUrl){
      case '/home-crypto':
        this.textClass = 'home-crypto'
        break;
      default:
        this.textClass = 'home'
        break;
    }
  }
}
