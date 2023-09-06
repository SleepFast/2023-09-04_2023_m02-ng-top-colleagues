import { Component, ViewEncapsulation } from '@angular/core';
import { Colleague } from './models/colleague';
import { LikeHate } from './models/like-hate';
import { Vote } from './models/vote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
