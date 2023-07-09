import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean | UrlTree {
      const user = this.authService.user
      const sessionUser: string = sessionStorage.getItem('user')

      if(!sessionUser){
        return this.router.parseUrl("/")
      }
    return true;
  }
  
}
