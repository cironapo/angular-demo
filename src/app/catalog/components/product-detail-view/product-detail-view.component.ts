import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServizioService } from 'src/app/services/servizio.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail-view',
  templateUrl: './product-detail-view.component.html',
  styleUrls: ['./product-detail-view.component.scss']
})
export class ProductDetailViewComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private _servizioService: ServizioService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( (params: any) => {
        this._servizioService.details(params.id).subscribe((product: Product)=>{
          this.product = product;
        }, (error: any) => {
          console.log(error);
        })
    });
  }


  back(): void{
    this._router.navigate(['/products']);
  }

}
