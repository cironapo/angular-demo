import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ServizioService } from '../services/servizio.service';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailViewComponent } from './components/product-detail-view/product-detail-view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
    resolve: {
      data: ServizioService
    }
  },
  {
    path: ':id',
    component: ProductDetailViewComponent
  },
]

@NgModule({
  declarations: [
    ProductRowComponent,
    ProductDetailComponent,
    ProductsListComponent,
    ProductDetailViewComponent
  ],
  exports:[
    ProductRowComponent,
    ProductDetailComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CatalogModule { }
