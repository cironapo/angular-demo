import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() onClick: EventEmitter<Product> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  click(): void{
    this.onClick.emit(this.product);
  }

}
