import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'feed',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../pages/feed/feed.module').then(m => m.FeedPageModule)
      },
      {
        path: 'collections',
        loadChildren: () =>
          import('../pages/collections/collections.module').then(m => m.CollectionsPageModule)
      },
      {
        path: 'history',
        loadChildren: () =>
          import('../pages/history/history.module').then(m => m.HistoryPageModule)
      },
      {
        path: 'me',
        loadChildren: () =>
          import('../pages/me/me.module').then(m => m.MePageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'feed',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
