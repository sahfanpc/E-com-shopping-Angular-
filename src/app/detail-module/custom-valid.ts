import { AbstractControl, ValidationErrors } from '@angular/forms';
// import{Validators,ValidatorFn} from '@angular/forms'
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';

export function passwordValid(
  control: AbstractControl
): Observable<ValidationErrors | null> {
  const value: string = control.value;
  const uppercase = /[A-Z]/.test(value);
  const lowercase = /[a-z]/.test(value);
  const digit = /[0-9]/.test(value);
  if (!uppercase || !lowercase || !digit) {
    // Emit an object with a validation error.
    return of({ invalidPassword: true });
  }
  // Emit null, to indicate no error occurred.
  return of(null);
}
// ////////////////////////////////////////////
import { Validators } from '@angular/forms';

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// const minlength = /.{8,}/;
const passwordValidator = Validators.pattern(passwordPattern);

export const passwordRegexModel = {
  pattern: passwordPattern,
  validator: passwordValidator,
  // length: minlength,
};
