import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isNotAutehnticatedGuard: CanActivateFn = (route, state) => {

  const aS = inject(AuthService);
  const router = inject(Router);

  if (aS.authStatus() === AuthStatus.authenticated) {
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};
