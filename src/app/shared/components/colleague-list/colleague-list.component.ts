import { Component, Input } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'app-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  constructor(private colleagueService: ColleagueService) {
  }
  // @Input() colleagueList!: Array<Colleague>
  colleagueList = this.colleagueService.list()
}
