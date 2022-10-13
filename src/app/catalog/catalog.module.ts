import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BoxLayoutComponent } from '../shared/components/box-layout/box-layout.component';
import { ServizioService } from '../services/servizio.service';



@NgModule({
  declarations: [
    ProductRowComponent,
    ProductDetailComponent
  ],
  exports:[
    ProductRowComponent,
    ProductDetailComponent
  ],
  providers: [ServizioService],
  imports: [
    CommonModule
  ]
})
export class CatalogModule { }
