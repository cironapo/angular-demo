import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServizioService } from 'src/app/services/servizio.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() onBack: EventEmitter<any> = new EventEmitter();
  constructor(
    private _servizioService: ServizioService
  ) { }

  ngOnInit(): void {
    console.log(this._servizioService.name);
  }


  back(): void{
      this._servizioService.name = 'Pluto';
      this.onBack.emit();
  }

}
