import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from './catalog/models/product';
import { ServizioService } from './services/servizio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'project';
  classCss: string | undefined;


  promo_product_id: number = 0;
  products: Product[] = [];
  productSelected: Product|undefined;
  constructor(
    private _servizioService: ServizioService
  ){

  }

  ngOnInit(): void {
    console.log(this._servizioService.name);
    this._servizioService.list().subscribe((products)=>{
      this.products = products;
    })
  }



  changePromoProduct(id: any){
    console.log(this._servizioService.name);
    this.promo_product_id = id;
  }
}
