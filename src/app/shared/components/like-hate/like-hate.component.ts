import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss'],
})
export class LikeHateComponent {
  @Output() likeHate:EventEmitter<number> = new EventEmitter<number>();

  handleLikeClick() {
    this.likeHate.emit(1)
  }

  handleHateClick() {
    this.likeHate.emit(-1)
  }
}
