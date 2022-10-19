import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NAVIGATION_ROUTES } from '@core/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    if (localStorage.getItem('authToken')) {
      return true;
    }
    return this.router.parseUrl(
      `/${NAVIGATION_ROUTES.AUTHENTICATION.BASE_PATH}/${NAVIGATION_ROUTES.AUTHENTICATION.LOG_IN}`
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class NotAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    if (!localStorage.getItem('authToken')) {
      return true;
    }
    return this.router.parseUrl(`/${NAVIGATION_ROUTES.ERROR_PAGES.NOT_FOUND}`);
  }
}
