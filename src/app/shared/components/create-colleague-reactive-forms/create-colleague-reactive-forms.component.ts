import { Component, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Colleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { FirstLastValidatorDirective } from '../../validators/first-last-validator.directive';
import { PseudoValidatorDirective } from '../../validators/pseudo-validator.directive';

@Component({
  selector: 'app-create-colleague-reactive-forms',
  templateUrl: './create-colleague-reactive-forms.component.html',
  styleUrls: ['./create-colleague-reactive-forms.component.scss']
})
export class CreateColleagueReactiveFormsComponent {
  monForm = new FormGroup({
    pseudo: new FormControl(),
    last: new FormControl(),
    first: new FormControl(),
    photo: new FormControl()
  })

  monModel!: Colleague

  constructor (private formBuilder: FormBuilder, private colleagueService: ColleagueService, private router: Router) {
    this.monForm = this.formBuilder.group({
      pseudo: [
        '',
        {
          validators: [Validators.required],
          asyncValidators: [this.validPseudo.bind(this)],
          updateOn: 'blur'
        }
      ],
      last: ['', [Validators.required, Validators.minLength(2)]],
      first: ['', [Validators.required, Validators.minLength(2)]],
      photo: ['', [Validators.required]]
    })
  }

  validPseudo(control: AbstractControl): Observable<ValidationErrors | null> {
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

  submit() {
    this.monModel = {
      pseudo: this.monForm.value.pseudo,
      score: 0,
      photo: this.monForm.value.photo,
      last: this.monForm.value.last,
      first: this.monForm.value.first
    }

    this.colleagueService.addColleague(this.monModel)

    this.router.navigate(['/welcomePage']);
  }

}
