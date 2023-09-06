import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'app-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  @Input() voteList!: Array<Vote>;

  @Output() removeVote:EventEmitter<number> = new EventEmitter<number>();

  handleRemoveClick(index: number) {
    this.removeVote.emit(index)
  }
}
