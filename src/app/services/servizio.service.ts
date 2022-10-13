import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../catalog/models/product';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  name: string = 'Ciao';
  constructor(
    private http: HttpClient
  ) { }




  list(): Observable<Product[]>{
    return this.http.get<Product[]>(
      `${environment.apiEndpoint}/products`);
  }
}
