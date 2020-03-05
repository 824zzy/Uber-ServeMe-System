import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { SpinnerComponent } from './spinner/spinner.component'
import {HidenavModule} from 'ionic4-hidenav';


@NgModule({
  declarations: [
    SlidesComponent,
    SpinnerComponent,
  ],
  exports: [
    SlidesComponent,
    SpinnerComponent,
    HidenavModule,
  ],
  imports: [
    CommonModule,
    IonicModule,
    HidenavModule,
  ]
})
export class ComponentsModule { }
