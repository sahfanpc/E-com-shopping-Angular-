import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  ValidatorFn
} from '@angular/forms';
import { from } from 'rxjs';
import { passwordValid} from '../custom-valid';
// import 'animate.css';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  // passwordFormControl = new FormControl('', [
  //   Validators.required,
  //   passwordValid,
  // ]);
  constructor(private fb: FormBuilder) {}
  // Custom password validator function

  
}
