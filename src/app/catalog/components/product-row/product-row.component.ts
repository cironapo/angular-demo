import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() product: Product | undefined;
  @Input() promo: boolean | undefined;
  @Output() onClick: EventEmitter<Product> = new EventEmitter();

  promoText: string | undefined;
  constructor() { }

  ngOnInit(): void {
    //console.log('on init di product row');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
    //console.log('on changes di product row');
    if( changes['promo'] ){
      if(changes['promo'].currentValue ){
        this.promoText = 'Questa è una promozione';
      }else{
        this.promoText = undefined;
      }
      //console.log('cambiato: promo');
    }
    if( changes['product'] ){
      //console.log('cambiato: product');
    }

  }


  goDetail(): void{
    this.onClick.emit(this.product);
  }

  ngAfterViewInit(): void {
    //console.log('after view init di product row');
  }

}
