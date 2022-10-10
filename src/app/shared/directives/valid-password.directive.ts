import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value === '')
            return { emptyPassword: { value: control.value } }
        /*if (!(/(?=.*[a-z])/.test(control.value)))
            return { noLowercase: { value: control.value } }
        else if (!(/(?=.*[A-Z])/.test(control.value)))
            return { noUppercase: { value: control.value } }
        else if (!(/(?=.*\d)/.test(control.value)))
            return { noNumeric: { value: control.value } }*/
        return null;
    };
}

@Directive({
    selector: '[validPassword]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true }]
})
export class PasswordValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        return passwordValidator()(control);
    }
}