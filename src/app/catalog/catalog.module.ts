import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';



@NgModule({
  declarations: [
    ProductRowComponent,
    ProductDetailComponent
  ],
  exports:[
    ProductRowComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CatalogModule { }
