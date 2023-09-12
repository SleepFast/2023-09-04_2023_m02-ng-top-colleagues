import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'app-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {
  constructor(private voteService: VoteService) { }

  voteList: Vote[] = []

  handleRemoveClick(index: number) {
    this.voteList.splice(index, 1)
  }

  ngOnInit(): void {
    this.voteList = this.voteService.list()
  }
}
