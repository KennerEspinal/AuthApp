import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  private _fb = inject(FormBuilder);
  private _aS = inject(AuthService);
  private _router = inject(Router);

  public loginForm: FormGroup = this._fb.group({
    email: ['kennerespinal@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  login() {
    const { email, password } = this.loginForm.value;
    this._aS.login(email, password)
      .subscribe({
        next: () => this._router.navigate(['/dashboard']),
        error: (err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Credentiales incorrectas',
            text: err,
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  }

}
