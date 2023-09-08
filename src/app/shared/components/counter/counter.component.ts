import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counterLike: number = 0;
  counterHate: number = 0;
  actionSub: Subscription;

  constructor(private voteService: VoteService) {
    this.actionSub = this.voteService.actionObs.subscribe(
      (vote: Vote) => {
        if (vote.likeHate == LikeHate.LIKE) {
          this.counterLike++;
        } else if (vote.likeHate == LikeHate.HATE) {
          this.counterHate++;
        }
      }
    );
  }
}
