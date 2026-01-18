import { Component, effect, Input, OnChanges, SimpleChanges } from '@angular/core';
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

  constructor(public auth: AuthService) {
    // S'abonner aux changements d'authentification pour mettre à jour l'affichage du bouton favoris si on se connecte ou déconnecte
    effect(() => {
      this.showBtnFavorites = this.auth.isAuthenticated();
      if (this.auth.isAuthenticated() && this.movie) {
        this.updateFavoriteStatus();
      }
    });
  }

  readonly Check = Check;
  readonly Plus = Plus;
  readonly Info = Info;

  // Pour gérer l'affichage du bouton favoris
  showBtnFavorites: boolean = false;
  isInFavorites: boolean = false;

  backgroundUrl: string = '';

  readonly Play = Play;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['movie'] && changes['movie'].currentValue) {
      this.updateFavoriteStatus();
      if (this.movie) {
        this.backgroundUrl = 'https://image.tmdb.org/t/p/original/' + this.movie.backdrop_path;
      } else {
        this.backgroundUrl = '';
      }
    }
  }

  async updateFavoriteStatus() {
    if (this.movie && this.auth.isAuthenticated()) {
      this.isInFavorites = await this.auth.isUserFavorite(this.movie.id);
    }
  }

  onClickFavorites() {
    if (!this.movie) return;

    if (this.isInFavorites) {
      this.auth
        .removeUserFavorite(this.movie.id)
        .then(() => {
          this.isInFavorites = false;
        })
        .catch((error) => {
          console.error('Error removing favorite:', error);
        });
    } else {
      this.auth
        .addUserFavorite(this.movie.id)
        .then(() => {
          this.isInFavorites = true;
        })
        .catch((error) => {
          console.error('Error adding favorite:', error);
        });
    }
  }
}
