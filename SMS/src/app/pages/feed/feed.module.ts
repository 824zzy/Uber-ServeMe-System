import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FeedPageRoutingModule } from './feed-routing.module';
import { FeedPage } from './feed.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SearchDisplayPageModule } from '../../modal/search-display/search-display.module'
import { ExpandableHeaderDirective } from '../../directives/expandable-header.directive'
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    FeedPageRoutingModule,
    SearchDisplayPageModule
  ],
  declarations: [
    FeedPage,
    ExpandableHeaderDirective,
  ],
  providers: [Geolocation]
})
export class FeedPageModule {}
