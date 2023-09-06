import { Component } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage {
  mesColleagues: Array<Colleague> =
  [
    {
    pseudo: 'pouet',
    score: -999,
    photo: `https://picsum.photos/id/${Math.floor(Math.random()*40)}/200`
    },
    {
      pseudo: 'pit',
      score: 999,
      photo: `https://picsum.photos/id/${Math.floor(Math.random()*40)}/200`
    },
    {
      pseudo: 'pat',
      score: 999,
      photo: `https://picsum.photos/id/${Math.floor(Math.random()*40)}/200`
    },
    {
      pseudo: 'prout',
      score: 999,
      photo: `https://picsum.photos/id/${Math.floor(Math.random()*40)}/200`
    }
  ]

  mesVotes: Array<Vote> =
  [
    {
      colleague : {
        pseudo: 'pouet',
        score: 500,
        photo: `https://picsum.photos/id/${Math.floor(Math.random()*40)}/200`
      },
      likeHate: LikeHate.LIKE
    },
    {
      colleague : {
        pseudo: 'pit',
        score: 500,
        photo: `https://picsum.photos/id/${Math.floor(Math.random()*40)}/200`
      },
      likeHate: LikeHate.HATE
    }
  ]

  removeVote(val: number) {
    this.mesVotes.splice(val, 1)
  }
}
