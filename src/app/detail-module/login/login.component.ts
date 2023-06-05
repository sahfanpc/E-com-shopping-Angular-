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
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatasarviceService } from 'src/app/datasarvice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  checktrue: any;
  // login
  loginform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordRegexModel.validator]],
  });
  // register
  registerform = this.fb.group({
    username: ['', [Validators.required]],
    regemail: ['', [Validators.required, Validators.email]],
    number: ['', [Validators.required]],
    pin: ['', [Validators.required]],
    place: ['', [Validators.required]],
    address: ['', [Validators.required]],
    regpassword: ['', [Validators.required, passwordRegexModel.validator]],
    confirmpassword: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private db: DatasarviceService,
    private snacbar: MatSnackBar,
    private router: Router
  ) {}

  // register-submit
  Register(value: any) {
    if (this.registerform.valid) {
      if (value.regpassword == value.confirmpassword) {
        this.db.userData(value);
        this.snacbar.open('Registretion seccessfully', '', {
          duration: 2000,
        });
      } else {
        this.snacbar.open('confirmpassword is not valid', 'done', {
          duration: 3000,
        });
      }
    } else {
      this.snacbar.open('registration failed', 'done', {
        duration: 3000,
      });
    }
  }

  // Login-submit
  Login(value: any) {
    if (this.loginform.valid) {
      this.checktrue = this.db.userLogin(value);
      if (this.checktrue) {
        this.router.navigateByUrl('shopping-dashboard');
      } else {
        this.snacbar.open('Login Failed', '', {
          duration: 3000,
        });
      }
    } else {
      this.snacbar.open('Not Valid', '', {
        duration: 3000,
      });
    }
  }
}
