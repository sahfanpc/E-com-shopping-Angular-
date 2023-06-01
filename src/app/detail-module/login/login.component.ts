import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { from } from 'rxjs';
import { passwordValid } from '../custom-valid';
// import 'animate.css';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginform = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, passwordValid],
  });
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  // passwordFormControl = new FormControl('', [
  //   Validators.required,
  //   passwordValid,
  // ]);
  constructor(private fb: FormBuilder) {}
}
