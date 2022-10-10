import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function confirmPassValidator(password: AbstractControl<any, any> | null | undefined): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value !== password?.value)
      return { unmatchedPasswords: { value: control.value } };
    return null
  };
}

@Directive({
  selector: '[checkPasswords]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmPasswordDirective, multi: true }]
})
export class ConfirmPasswordDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.parent?.get('password')
    return confirmPassValidator(password)(control);
  }
}