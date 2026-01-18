import { Component, effect, OnInit } from '@angular/core';
import { Item } from '../../lib/types';
import { AuthService } from '../auth.service';
import { getUserFavorites } from '../../lib/api';
import { Card } from '../../Components/Card/Card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  imports: [Card],
  templateUrl: './Favorites.html',
  styleUrl: './Favorites.css'
})
export class Favorites implements OnInit {
  constructor(private auth: AuthService, router: Router) {
    effect(() => {
      if (!this.auth.isAuthenticated()) {
        router.navigate(['/login']);
      }
    });
  }

  items: Item[] = [];

  

  ngOnInit() {
    // Vérifier si l'utilisateur est authentifié
    if (!this.auth.isAuthenticated()) {
      console.error('User is not authenticated');
      return;
    }


    // Récupérer les films favoris de l'utilisateur
    getUserFavorites(this.auth.getToken()!)
      .then((data) => {
        this.items = data;
      })
      .catch((error) => {
        console.error('Error fetching user favorites:', error);
      });
  }
}
