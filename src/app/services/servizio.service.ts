import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../catalog/models/product';

@Injectable({
  providedIn: 'root'
})
export class ServizioService implements Resolve<Product[]>{
  products: BehaviorSubject<Product[]> = new BehaviorSubject(<any>[]);
  products$: Observable<Product[]>;
  name: string = 'Ciao';
  constructor(
    private http: HttpClient
  ) {
    this.products$ = this.products.asObservable();
  }


  getPromise(): Promise<any>{
    return new Promise((resolve, reject) => {
      try{
        setTimeout(() => {
          resolve("foo");

        }, 300);
      }catch( error){
        reject(error);
      }

    });
  }


  list(): Observable<Product[]>{
    return this.http.get<Product[]>(
      `${environment.apiEndpoint}/products`).pipe(tap(data=>{
          this.products.next(data);
      }));
  }

  details(id: number): Observable<Product>{
    return this.http.get<Product>(
      `${environment.apiEndpoint}/products/${id}`);
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {
      return this.list();
  }
}
