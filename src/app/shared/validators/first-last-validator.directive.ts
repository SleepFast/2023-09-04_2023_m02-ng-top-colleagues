import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appFirstLastValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: FirstLastValidatorDirective,
    multi: true}]
})
export class FirstLastValidatorDirective  implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log(`POUET`, control)
    if (control.value.first !== control.value.last) {
      return null
    } else {
      return {
        firstLast: 'first and last name must be different from eachother'
      }
    }
  }

}
