import { Item, Category } from './types';
import { mockMovies, mockCategories } from './mock';

/**
 * Simule un délai réseau pour rendre le comportement plus réaliste
 */
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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
  await delay(300);
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
  await delay(300);
  const movie = mockMovies.find((m) => m.id === movieId);
  return movie || null;
}

/**
 * Récupère les films mis en avant (featured)
 * @returns Promise<Movie[]>
 */
export async function getFeaturedMovies(): Promise<Item[]> {
  await delay(400);
  return mockMovies.filter((movie) => movie.featured);
}

/**
 * Recherche des films par titre
 * @param query - Le terme de recherche
 * @returns Promise<Movie[]>
 */
export async function searchMovies(query: string): Promise<Item[]> {
  await delay(400);
  const lowerQuery = query.toLowerCase();
  return mockMovies.filter((movie) => movie.title.toLowerCase().includes(lowerQuery));
}

/**
 * Récupère les films par genre
 * @param genre - Le genre recherché
 * @returns Promise<Movie[]>
 */
export async function getMoviesByGenre(genre: string): Promise<Item[]> {
  await delay(400);
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
  await delay(400);
  return mockMovies.slice(offset, offset + limit);
}

/**
 * Récupère un film aléatoire
 * @returns Promise<Movie>
 */
export async function getRandomMovie(): Promise<Item> {
  await delay(200);
  const randomIndex = Math.floor(Math.random() * mockMovies.length);
  return mockMovies[randomIndex];
}
