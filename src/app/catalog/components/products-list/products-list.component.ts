import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, observable, Observable, Subject } from 'rxjs';
import { ServizioService } from 'src/app/services/servizio.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  title = 'project';
  classCss: string | undefined;


  promo_product_id: number = 0;
  productSelected: Product|undefined;



  constructor(
    public servizioService: ServizioService
  ){

  }

  ngOnInit(): void {
    /*const obj = new Subject();

    const subscription1 = obj.subscribe( data => {
      console.log(data,'primo');
    })
    const subscription2 =obj.subscribe( data => {
      console.log(data,'secondo');
    })


    obj.next(1);
    obj.next(2);
    obj.next(3);
    obj.next(4);


    const subscription3 =obj.subscribe( data => {
      console.log(data,'terzo');
    })

    obj.next(5);

    /*const obs = new Observable(observer =>{
        setInterval(function(){
          observer.next(Math.random());
        },100);

    });
    const subscription = obs.subscribe( data =>{

    });

    const subscription2 = obs.subscribe(
      (next): void => {
          console.log(next,'observer 2');
      },
      (error): void =>{

      },
      (): void => {
        console.log('finito');
      }

    )

    setTimeout( function(){
      subscription.unsubscribe();
      subscription2.unsubscribe();
    },5000)


    console.log(obs);


    this._servizioService.getPromise().then( data =>{
        console.log(data);
    }, (error)=>{

    });*/


    //console.log(this._servizioService.name);
    //this.servizioService.list().subscribe();
  }



  changePromoProduct(id: any){
    console.log(this.servizioService.name);
    this.promo_product_id = id;
  }

}
