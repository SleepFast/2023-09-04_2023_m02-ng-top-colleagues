import { Component, Input } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';

@Component({
  selector: 'app-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  @Input() colleagueList!: Array<Colleague>
}
