import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const authService = inject(Auth);

  if(!authService.isAuthenticated()){
    router.navigate(['']);
    return false
  }

  
  return true;
};