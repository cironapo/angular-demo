import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './components/top/top.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    TopComponent,
    FooterComponent
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
