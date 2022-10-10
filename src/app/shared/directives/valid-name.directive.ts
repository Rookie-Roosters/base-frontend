import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(control.value === '')
      return {emptyName: {value: control.value}}
      else{
      const name = /^$|^[a-zA-ZáéíóúüñÁÉÓÚÜÑ ]{1,64}$/u.test(control.value);
      return name ? null : {invalidName: {value: control.value}};
      }
    };
  }
  
  @Directive({
    selector: '[validName]',
    providers: [{provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true}]
  })
  export class NameValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
      return nameValidator()(control);
    }
  }