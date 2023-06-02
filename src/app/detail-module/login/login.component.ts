import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { from } from 'rxjs';
// custom-vallidation
import { passwordRegexModel, passwordValid } from '../custom-valid';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBar,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // login
  loginform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordRegexModel.validator]],
  });
  // register
  registerform = this.fb.group({
    regemail: ['', [Validators.required, Validators.email]],
    regpassword: ['', [Validators.required, passwordRegexModel.validator]],
    username: ['', [Validators.required]],
    number: ['', [Validators.required]],
    pin: ['', [Validators.required]],
    address: ['', [Validators.required]],
    place: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required]],
  });
  private _snackBar: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private fb: FormBuilder) {}

  // register-submit
  Register(value: any) {
    if (this.registerform.valid) {
      alert('gbgbgfb');
    } else {
      // this.snackBar.open('Cannonball!!', 'Splash', {
      //   horizontalPosition: this.horizontalPosition,
      //   verticalPosition: this.verticalPosition,
      // });
    }
  }
}
