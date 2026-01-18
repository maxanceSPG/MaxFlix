import { Component, OnInit } from '@angular/core';
import { Item } from '../../lib/types';
import { AuthService } from '../auth.service';
import { getUserFavorites } from '../../lib/api';
import { Card } from '../../Components/Card/Card';

@Component({
  selector: 'app-favorites',
  imports: [Card],
  templateUrl: './Favorites.html',
  styleUrl: './Favorites.css'
})
export class Favorites implements OnInit {
  constructor(private auth: AuthService) {}

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
