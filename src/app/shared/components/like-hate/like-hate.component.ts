import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss'],
})
export class LikeHateComponent {
  @Output() likeHate:EventEmitter<number> = new EventEmitter<number>();

  @Input() score!: number;

  pouet = 0;
  isTooHigh = false
  isTooLow = false

  handleLikeClick() {
    this.likeHate.emit(1)
    this.pouet += 1
    if (this.score >= 999 ) {
      this.isTooHigh = true
    } else if (this.isTooLow && this.score >= -1000) {
      this.isTooLow = false
    }
    setTimeout(() => {
      this.pouet = 0
    }, 150);
  }

  handleHateClick() {
    this.likeHate.emit(-1)
    this.pouet -= 1
    if (this.score <= -999 ) {
      this.isTooLow = true
    } else if (this.isTooHigh && this.score <= 1000) {
      this.isTooHigh = false
    }
    setTimeout(() => {
      this.pouet = 0
    }, 150);
  }
}
