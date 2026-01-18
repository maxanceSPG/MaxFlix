import { Item, Category, User, AuthResponse } from './types';
import { mockMovies, mockCategories, mockUser } from './mock';

/**
 * Simule un délai réseau pour rendre le comportement plus réaliste
 */
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Authentifie un utilisateur avec ses identifiants email et mot de passe.to an authentication response containing the user object and JWT token
 *
 * @param email - L'adresse email de l'utilisateur
 * @param password - Le mot de passe de l'utilisateur
 * @returns Une promesse qui résout en une réponse d'authentification contenant l'objet utilisateur et le token JWT
 * @throws Lance une erreur avec le message "Email ou mot de passe invalide" si les identifiants sont invalides
 */
export async function login(email: string, password: string): Promise<AuthResponse> {
  await delay(800);
  // Génération d'un faux token JWT
  if (email !== 'test@mail.com' && password !== 'password') {
    // Simule une erreur d'authentification
    throw new Error('Email ou mot de passe invalide');
  }

  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${btoa(JSON.stringify({ id: mockUser.id, email }))}.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
  return {
    user: { ...mockUser, email },
    token,
  };
}

/**
 * Déconnecte l'utilisateur en invalidant le token côté serveur
 * @param token - Le token JWT de l'utilisateur
 * @returns Promise<void>
 */
export async function logout(token: string): Promise<void> {
  await delay(500);
  // Ici, on simule simplement la déconnexion sans action réelle
}

/**
 * Permet de récupérer la liste des favorits d'un utilisateur
 * @param token - Le token JWT de l'utilisateur
 * @returns Promise<Item[]>
 */
export async function getUserFavorites(token: string): Promise<Item[]> {
  await delay(500);
  // Pour la simulation, on retourne les 3 premiers films comme favoris
  return mockMovies.slice(0, 3);
}

/**
 * Permet d'ajouter un film aux favoris de l'utilisateur
 * @param token - Le token JWT de l'utilisateur
 * @param movieId - L'identifiant du film à ajouter
 * @returns Promise<void>
 */
export async function addUserFavorite(
  token: string,
  movieId: string,
): Promise<void> {
  await delay(500);
  // Simulation : aucune action réelle n'est effectuée
}

/**
 * Permet de savoir si un film est dans les favoris de l'utilisateur
 * @param token - Le token JWT de l'utilisateur
 * @param movieId - L'identifiant du film à vérifier
 * @returns Promise<boolean>
 */
export async function isUserFavorite(
  token: string,
  movieId: string,
): Promise<boolean> {
  await delay(500);
  // Simulation : on considère que les films avec un ID pair sont dans les favoris
  const movie = mockMovies.find((m) => m.id === movieId);
  if (!movie) {
    return false;
  }
  const movieIndex = mockMovies.indexOf(movie);
  return movieIndex % 2 === 0;
}

/**
 * Permet de retirer un film des favoris de l'utilisateur
 * @param token - Le token JWT de l'utilisateur
 * @param movieId - L'identifiant du film à retirer
 * @returns Promise<void>
 */
export async function removeUserFavorite(
  token: string,
  movieId: string,
): Promise<void> {
  await delay(500);
  // Simulation : aucune action réelle n'est effectuée
}

/**
 * Récupère toutes les catégories avec leurs films
 * @returns Promise<Category[]>
 */
export async function getCategories(): Promise<Category[]> {
  await delay(500); // Simule un délai réseau
  return mockCategories;
}

/**
 * Récupère une catégorie spécifique par son ID
 * @param categoryId - L'identifiant de la catégorie
 * @returns Promise<Category | null>
 */
export async function getCategoryById(categoryId: string): Promise<Category | null> {
  await delay(500);
  const category = mockCategories.find((cat) => cat.id === categoryId);
  return category || null;
}

/**
 * Récupère tous les films
 * @returns Promise<Movie[]>
 */
export async function getAllMovies(): Promise<Item[]> {
  await delay(500);
  return mockMovies;
}

/**
 * Récupère un film spécifique par son ID
 * @param movieId - L'identifiant du film
 * @returns Promise<Movie | null>
 */
export async function getMovieById(movieId: string): Promise<Item | null> {
  await delay(500);
  const movie = mockMovies.find((m) => m.id === movieId);
  return movie || null;
}

/**
 * Récupère les films mis en avant (featured)
 * @returns Promise<Movie[]>
 */
export async function getFeaturedMovies(): Promise<Item[]> {
  await delay(500);
  return mockMovies.filter((movie) => movie.featured);
}

/**
 * Recherche des films par titre
 * @param query - Le terme de recherche
 * @returns Promise<Movie[]>
 */
export async function searchMovies(query: string): Promise<Item[]> {
  await delay(500);
  const lowerQuery = query.toLowerCase();
  return mockMovies.filter((movie) => movie.title.toLowerCase().includes(lowerQuery));
}

/**
 * Récupère les films par genre
 * @param genre - Le genre recherché
 * @returns Promise<Movie[]>
 */
export async function getMoviesByGenre(genre: string): Promise<Item[]> {
  await delay(500);
  return mockMovies.filter((movie) =>
    movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase()),
  );
}

/**
 * Récupère un nombre limité de films (pagination)
 * @param limit - Nombre maximum de films à retourner
 * @param offset - Index de départ
 * @returns Promise<Movie[]>
 */
export async function getMoviesWithPagination(
  limit: number = 10,
  offset: number = 0,
): Promise<Item[]> {
  await delay(500);
  return mockMovies.slice(offset, offset + limit);
}

/**
 * Récupère un film aléatoire
 * @returns Promise<Movie>
 */
export async function getRandomMovie(): Promise<Item> {
  await delay(500);
  const randomIndex = Math.floor(Math.random() * mockMovies.length);
  return mockMovies[randomIndex];
}
