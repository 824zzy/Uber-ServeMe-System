import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../services/user.service';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    public auth: AngularFireAuth,
    public user: UserService,
    public router: Router
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.auth.auth.onAuthStateChanged(user => {
        if(user) this.router.navigate(['home/feed'])
        resolve(!user ? true : false)
      })
    })
  }
  
}
