import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from '../Components/nav-bar/nav-bar';
import { Hero } from '../Components/Hero/Hero';
import { Category, Item } from '../lib/types';
import { getCategories, getRandomMovie } from '../lib/api';
import { CategoryList } from '../Components/CategroyList/CategoryList';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('MaxFlix');
}
