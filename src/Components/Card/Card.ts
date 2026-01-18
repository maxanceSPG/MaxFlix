import { Component, Input } from '@angular/core';
import { Item } from '../../lib/types';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './Card.html',
  styleUrl: './Card.css',
})
export class Card {
  @Input()
  movie: Item | undefined;
}
