import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full',
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'vendor',
    loadChildren: () => import('./pages/vendor/vendor.module').then( m => m.VendorPageModule)
  },
  {
    path: 'service-detail',
    loadChildren: () => import('./pages/service-detail/service-detail.module').then( m => m.ServiceDetailPageModule)
  },
  {
    path: 'service-detail/:id',
    loadChildren: () => import('./pages/service-detail/service-detail.module').then( m => m.ServiceDetailPageModule)
  },
  {
    path: 'add-service',
    loadChildren: () => import('./pages/add-service/add-service.module').then( m => m.AddServicePageModule)
  },
  {
    path: 'vendor-request',
    loadChildren: () => import('./pages/vendor-request/vendor-request.module').then( m => m.VendorRequestPageModule)
  },
  {
    path: 'vendor-location',
    loadChildren: () => import('./pages/vendor-location/vendor-location.module').then( m => m.VendorLocationPageModule)
  },
  {
    path: 'place-request',
    loadChildren: () => import('./pages/place-request/place-request.module').then( m => m.PlaceRequestPageModule)
  },
  {
    path: 'place-request/:id',
    loadChildren: () => import('./pages/place-request/place-request.module').then( m => m.PlaceRequestPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./pages/review/review.module').then( m => m.ReviewPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
