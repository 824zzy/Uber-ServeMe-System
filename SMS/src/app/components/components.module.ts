import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { SpinnerComponent } from './spinner/spinner.component'
import { HidenavModule } from 'ionic4-hidenav';
import { VendorhomePopoverComponent } from './vendorhome-popover/vendorhome-popover.component'

@NgModule({
  declarations: [
    SlidesComponent,
    SpinnerComponent,
    VendorhomePopoverComponent,
  ],
  exports: [
    SlidesComponent,
    SpinnerComponent,
    VendorhomePopoverComponent,
    HidenavModule,
  ],
  imports: [
    CommonModule,
    IonicModule,
    HidenavModule,
  ]
})
export class ComponentsModule { }
