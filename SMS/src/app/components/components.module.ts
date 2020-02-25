import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { SpinnerComponent } from '../components/spinner/spinner.component'


@NgModule({
  declarations: [
    SlidesComponent,
    SpinnerComponent
  ],
  exports: [
    SlidesComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
