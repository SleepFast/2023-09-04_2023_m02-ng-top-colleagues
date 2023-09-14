import { HttpClient } from '@angular/common/http';
import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors, ControlContainer } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { Colleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Directive({
  selector: '[appPseudoValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective,
  multi: true}],
})
export class PseudoValidatorDirective implements AsyncValidator {

  constructor(private colleagueService: ColleagueService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    return this.colleagueService.getColleagueByPseudo(control.value).pipe(
      map((colleague: Colleague | null) => {
        console.log(colleague)
        if(colleague !== null) {
          return { errorPseudo: "Ce pseudo est déjà utilisé" };
        }
        return null;
      }),catchError(() => of(null))
    )
  }

}
