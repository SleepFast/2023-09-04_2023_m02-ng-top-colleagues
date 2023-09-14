import { Component, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs';
import { Colleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'app-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateColleagueFormsComponent {
  monModel: Colleague = {
    pseudo: "",
    score: 0,
    last: "",
    first: "",
    photo: ""
  }

  constructor (private colleagueService: ColleagueService) {}

  submit() {
    this.colleagueService.addColleague(this.monModel)
  }
}
