import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() onBack: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  back(): void{
      this.onBack.emit();
  }

}
