import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from './catalog/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  products: Product[] = [];
  selected: Product|undefined;
  constructor(
    private http: HttpClient
  ){
      this.http.get<Product[]>("http://localhost:3000/products").subscribe((products)=>{
        this.products = products;
      })
  }
}
