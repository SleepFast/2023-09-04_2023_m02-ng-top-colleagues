import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'app-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  constructor(private voteService: VoteService) { }

  voteList = this.voteService.list()

  handleRemoveClick(index: number) {
    this.voteList.splice(index, 1)
  }
}
