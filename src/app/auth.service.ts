import { Injectable, signal } from '@angular/core';
import { User } from '../lib/types';
import { login, logout } from '../lib/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Signal qui contient l'utilisateur courant ou null
  currentUser = signal<User | null>(null);
  // Signal pour le token
  token = signal<string | null>(null);

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
}
