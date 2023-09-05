import { Component } from '@angular/core';
import { Colleague } from './models/colleague';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';
  monColleague: Colleague = {
    pseudo: 'pouet',
    score: 500,
    photo: 'https://picsum.photos/200'
  }
}
