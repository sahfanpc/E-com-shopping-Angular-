import { Component } from '@angular/core';
import {FormControl, FormsModule,ReactiveFormsModule, Validators}from '@angular/forms'
import { from } from 'rxjs';
// import 'animate.css';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
}
