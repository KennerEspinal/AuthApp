import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styles: ``
})
export class DashboardLayoutComponent {

  private _aS = inject(AuthService);

  public user = computed(() => this._aS.currentUser());

  // get user(){
  //   return this._aS.currentUser();
  // }

  logout(){
    this._aS.logout();
  }

}
