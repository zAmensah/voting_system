import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('token')) {
      return state.url.startsWith('/home')
        ? true
        : (this.router.navigate(['/login']), false);
    } else {
      return state.url.startsWith('/home')
      ? (this.router.navigate(['/login']), false)
      : true;
    }
  }
}
