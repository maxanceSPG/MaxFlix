import { Routes } from '@angular/router';
import { Series } from './Series/Series';
import { Home } from './Home/Home';
import { Films } from './Films/Films';
import { Login } from './Login/Login';
import { Favorites } from './Favorites/Favorites';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  {
    path: 'series',
    component: Series,
  },
  { path: 'films', component: Films },
  { path: 'login', component: Login },
  { path: 'favorites', component: Favorites }
];
