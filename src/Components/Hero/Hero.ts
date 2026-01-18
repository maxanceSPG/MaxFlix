import { Component, Input, input } from '@angular/core';
import { Item } from '../../lib/types';
import { LucideAngularModule, Play } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule],
  templateUrl: './Hero.html',
  styleUrl: './Hero.css',
})
export class Hero {
  @Input() movie: Item | undefined;

  readonly Play = Play;
}
