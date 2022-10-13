import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from './catalog/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  products: Product[] = [];
  productSelected: Product|undefined;
  constructor(
    private http: HttpClient
  ){
      this.http.get<Product[]>(
        `${environment.apiEndpoint}/products`).subscribe((products)=>{
        this.products = products;
      })
  }
}
