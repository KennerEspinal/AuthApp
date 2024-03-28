import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private _aS = inject(AuthService);
  private _router = inject(Router);

  finishedAuthCheck = computed<boolean>(() => {
    if (this._aS.authStatus() === AuthStatus.checking) {
      return false;
    }
    return true;
  })

  authStatusChangedEffect = effect(() => {
    switch (this._aS.authStatus()) {
      case AuthStatus.checking:
        return; 
      case AuthStatus.authenticated:
        this._router.navigate(['/dashboard']);
        return;
      case AuthStatus.notAuthenticated:
        this._router.navigate(['/auth/login']);
        return;
    }

  })
}
