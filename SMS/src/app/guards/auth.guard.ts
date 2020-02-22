import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,

  ){}
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.userService.getAuth().onAuthStateChanged(user => {
        if(!user) this.router.navigate(['login'])
        resolve(user ? true : false)
      })
    })
  }
}
