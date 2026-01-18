import { Component } from '@angular/core';
import { Hero } from '../../Components/Hero/Hero';
import { CategoryList } from '../../Components/CategroyList/CategoryList';
import { Category, Item } from '../../lib/types';
import { getCategories, getRandomMovie } from '../../lib/api';

@Component({
  selector: 'app-home',
  imports: [Hero, CategoryList],
  templateUrl: './Home.html',
  styleUrl: './Home.css',
})
export class Home {
  categories: Category[] = [];

  movieHero: Item | undefined;

  ngOnInit() {
    getCategories()
      .then((data) => {
        this.categories = data;
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });

    // Récupérer un film aléatoire pour le hero
    getRandomMovie()
      .then((movie) => {
        this.movieHero = movie;
      })
      .catch((error) => {
        console.error('Error fetching random movie:', error);
      });
  }
}
