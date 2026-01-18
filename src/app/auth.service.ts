import { Injectable, signal } from '@angular/core';
import { User } from '../lib/types';
import { addUserFavorite, isUserFavorite, login, logout, removeUserFavorite } from '../lib/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Signal qui contient l'utilisateur courant ou null
  private currentUser = signal<User | null>(null);
  // Signal pour le token
  private token = signal<string | null>(null);

  constructor() {
    // Vérifier si l'utilisateur et le token sont déjà présents via localStorage
    const savedUser = localStorage.getItem('user');
    const savedToken = localStorage.getItem('token');

    if (savedUser && savedToken) {
      this.currentUser.set(JSON.parse(savedUser));
      this.token.set(savedToken);
    }
  }

  async login(email: string, password: string): Promise<void> {
    try {
      const response = await login(email, password);
      if (response && response.user && response.token) {
        this.currentUser.set(response.user);
        this.token.set(response.token);

        // Persistance
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', response.token);
      }
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  }

  async logout() {
    // Supprime le token coté serveur
    const token = this.token();
    if (token) {
      await logout(token);
    }
    // Supprime les données locales
    this.currentUser.set(null);
    this.token.set(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return this.token() !== null;
  }

  getToken(): string | null {
    return this.token();
  }
  getCurrentUser(): User | null {
    return this.currentUser();
  }

  async isUserFavorite(movieId: string): Promise<boolean> {
    const token = this.token();
    if (token) {
      try {
        const isFavorite = await isUserFavorite(token, movieId);
        return isFavorite;
      } catch (error) {
        console.error('Erreur pendant la vérification des favoris:', error);
      }
    }
    return false;
  }

  addUserFavorite(movieId: string): Promise<void> {
    const token = this.token();
    if (token) {
      try {
        return addUserFavorite(token, movieId);
      } catch (error) {
        console.error("Erreur pendant l'ajout aux favoris:", error);
      }
    }
    return Promise.reject('User is not authenticated');
  }

  removeUserFavorite(movieId: string): Promise<void> {
    const token = this.token();
    if (token) {
      try {
        return removeUserFavorite(token, movieId);
      } catch (error) {
        console.error("Erreur pendant la suppression des favoris:", error);
      }
    }
    return Promise.reject('User is not authenticated');
  }
}
