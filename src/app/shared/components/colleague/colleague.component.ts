import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'app-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() colleague!: Colleague ;

  @Output() refreshList: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor (private voteService: VoteService) {

  }

  traiter(val: number) {
    this.addVoteToCollegue(val)
    this.refreshList.emit(true)
  }

  addVoteToCollegue(vote:LikeHate){
    if(this.colleague){
      const newVote = {
        colleague: this.colleague,
        likeHate: vote
      }
      this.voteService.addVote(newVote);
    }
  }
}
