import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAutehnticatedGuard: CanActivateFn = (route, state) => {

  const aS = inject(AuthService);
  const router = inject(Router);

  console.log({ authService: aS.authStatus() });

  if (aS.authStatus() === AuthStatus.authenticated) {
    return true;
  }

  router.navigate(['/auth']);

  return false;
};
