import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service'

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/testlogin/testlogin.module').then( m => m.TestloginPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule),
    // canActivate: [AuthService]
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./pages/review/review.module').then( m => m.ReviewPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'testlogin',
    loadChildren: () => import('./pages/testlogin/testlogin.module').then( m => m.TestloginPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
