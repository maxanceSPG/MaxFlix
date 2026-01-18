import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from '../../lib/types';
import { Check, Info, LucideAngularModule, Play, Plus } from 'lucide-angular';
import { AuthService } from '../../app/auth.service';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule],
  templateUrl: './Hero.html',
  styleUrl: './Hero.css',
})
export class Hero implements OnChanges {
  @Input() movie: Item | undefined;

  constructor(public auth: AuthService) {}

  readonly Check = Check;
  readonly Plus = Plus;
  readonly Info = Info;

  // Pour gérer l'affichage du bouton favoris
  showBtnFavorites: boolean = false;
  isInFavorites: boolean = false;

  readonly Play = Play;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['movie'] && changes['movie'].currentValue) {
      this.updateFavoriteStatus();
    }
  }

  async updateFavoriteStatus() {
    if (this.movie && this.auth.isAuthenticated()) {
      this.isInFavorites = await this.auth.isUserFavorite(this.movie.id);
      this.showBtnFavorites = true;
    } else {
      this.showBtnFavorites = false;
    }
  }
}
