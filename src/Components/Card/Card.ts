import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from '../../lib/types';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './Card.html',
  styleUrl: './Card.css',
})
export class Card implements OnChanges {
  @Input()
  movie: Item | undefined;

  backgroundUrl: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['movie'] && changes['movie'].currentValue) {
      if (this.movie) {
        this.backgroundUrl = 'https://image.tmdb.org/t/p/w500/' + this.movie.backdrop_path;
      } else {
        this.backgroundUrl = '';
      }
    }
  }
}
