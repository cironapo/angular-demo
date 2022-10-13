import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './components/top/top.component';
import { FooterComponent } from './components/footer/footer.component';
import { BoxLayoutComponent } from './components/box-layout/box-layout.component';



@NgModule({
  declarations: [
    TopComponent,
    FooterComponent,
    BoxLayoutComponent
  ],
  exports: [
    TopComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
