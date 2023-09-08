import { Component, Input, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'app-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() colleague!: Colleague ;

  constructor (private voteService: VoteService) {

  }

  traiter(val: number) {
    if(this.colleague){
      if(val === LikeHate.HATE){
        this.colleague.score -= 200;
      } else if (val === LikeHate.LIKE){
        this.colleague.score += 100;
      }
    }
    this.addVoteToCollegue(val)
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
