import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss'],
})
export class LikeHateComponent {
  @Output() likeHate:EventEmitter<number> = new EventEmitter<number>();

  pouet = 0;

  handleLikeClick() {
    this.likeHate.emit(1)
    this.pouet += 1
    setTimeout(() => {
      this.pouet = 0
    }, 150);
  }

  handleHateClick() {
    this.likeHate.emit(-1)
    this.pouet -= 1
    setTimeout(() => {
      this.pouet = 0
    }, 150);
  }
}
