import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router:Router = inject(Router); 
  console.log(router);
  const protectedRoutes: RegExp[] = [/^\/auth\/administrador$/];

  const isProtectedRoute = protectedRoutes.some((pattern) => pattern.test(state.url));
  const isAuthenticated = !!localStorage.getItem('usuario');

  return isProtectedRoute && isAuthenticated ? true : router.navigate(['auth/signin-basic']);

};
