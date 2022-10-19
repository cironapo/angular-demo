
import { Component, OnInit } from '@angular/core';
import { ServizioService } from './services/servizio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private _servizioService: ServizioService
  ){

  }

  ngOnInit(): void {
      this._servizioService.products$.subscribe((products)=>{

        console.log(products,'app component');


      })
  }
}
