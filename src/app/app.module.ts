import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes } from '@angular/router';
import { CiaoComponent } from './components/ciao/ciao.component';

const rotte: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule)
  },
  {
    path: 'ciao',
    component: CiaoComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    CiaoComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(rotte),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
