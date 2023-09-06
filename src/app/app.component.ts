import { Component } from '@angular/core';
import { Colleague } from './models/colleague';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';
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
}
