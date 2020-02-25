import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FeedPageRoutingModule } from './feed-routing.module';
import { FeedPage } from './feed.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedPageRoutingModule
  ],
  declarations: [FeedPage],
  providers: [Geolocation]
})
export class FeedPageModule {}
