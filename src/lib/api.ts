import { mockMovies, mockUser } from './mock';
import { Item, Category, User, AuthResponse } from './types';
import { environment } from '../environments/environment';

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
  // Pour la simulation, on retourne 3  films comme favoris
  return [
    {
      adult: false,
      backdrop_path: '/ebyxeBh56QNXxSJgTnmz7fXAlwk.jpg',
      genre_ids: [28, 878, 12],
      id: 1242898,
      original_language: 'en',
      original_title: 'Predator: Badlands',
      overview:
        'Cast out from his clan, a young Predator finds an unlikely ally in a damaged android and embarks on a treacherous journey in search of the ultimate adversary.',
      popularity: 420.2485,
      poster_path: '/pHpq9yNUIo6aDoCXEBzjSolywgz.jpg',
      release_date: '2025-11-05',
      title: 'Predator: Badlands',
      video: false,
      vote_average: 7.796,
      vote_count: 1491,
    },
    {
      adult: false,
      backdrop_path: '/gQimJqYMKCkwHIo8wwYKhmnCfBr.jpg',
      genre_ids: [28, 80, 53],
      id: 1242501,
      original_language: 'en',
      original_title: 'Icefall',
      overview:
        'A young Indigenous game warden arrests an infamous poacher only to discover that the poacher knows the location of a plane carrying millions of dollars that has crashed in a frozen lake. When a group of criminals and dirty cops are alerted to the poacher’s whereabouts, the warden and the poacher team up to fight back and escape across the treacherous lake before the ice melts.',
      popularity: 291.7639,
      poster_path: '/5Byv6nznAb2Izd0gHpODOXnuSbo.jpg',
      release_date: '2025-10-16',
      title: 'Icefall',
      video: false,
      vote_average: 6.542,
      vote_count: 84,
    },
    {
      adult: false,
      backdrop_path: '/kwNIQW7egAmI66sb0zIugMbpCfU.jpg',
      genre_ids: [28, 53, 80, 18, 9648],
      id: 1306368,
      original_language: 'en',
      original_title: 'The Rip',
      overview:
        'Trust frays when a team of Miami cops discovers millions in cash inside a run-down stash house, calling everyone — and everything — into question.',
      popularity: 291.2808,
      poster_path: '/p4bW2sJKAwcHuLpfoZK7Zo63osA.jpg',
      release_date: '2026-01-13',
      title: 'The Rip',
      video: false,
      vote_average: 7.148,
      vote_count: 294,
    },
  ];
}

/**
 * Permet d'ajouter un film aux favoris de l'utilisateur
 * @param token - Le token JWT de l'utilisateur
 * @param movieId - L'identifiant du film à ajouter
 * @returns Promise<void>
 */
export async function addUserFavorite(token: string, movieId: number): Promise<void> {
  await delay(500);
  // Simulation : aucune action réelle n'est effectuée
}

/**
 * Permet de savoir si un film est dans les favoris de l'utilisateur
 * @param token - Le token JWT de l'utilisateur
 * @param movieId - L'identifiant du film à vérifier
 * @returns Promise<boolean>
 */
export async function isUserFavorite(token: string, movieId: number): Promise<boolean> {
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
export async function removeUserFavorite(token: string, movieId: number): Promise<void> {
  await delay(500);
  // Simulation : aucune action réelle n'est effectuée
}

/**
 * Récupère toutes les catégories avec leurs films
 * @returns Promise<Category[]>
 */
export async function getCategories(): Promise<Category[]> {
  const response = await fetch(
    `${environment.tmdbApiUrl}/genre/movie/list?api_key=${environment.tmdbApiKey}`,
  )
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching categories:', error);
      return { genres: [] };
    });
  const categories: Category[] = response.genres.map((genre: any) => ({
    id: genre.id.toString(),
    name: genre.name,
  }));
  return categories;
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
export async function getMovieById(movieId: number): Promise<Item | null> {
  await delay(500);
  const movie = mockMovies.find((m) => m.id === movieId);
  return movie || null;
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
  const response = await fetch(
    `${environment.tmdbApiUrl}/discover/movie?api_key=${environment.tmdbApiKey}&with_genres=${genre}&sort_by=popularity.desc`,
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    })
    .catch((error) => {
      console.error('Error fetching movies by genre:', error);
      return [];
    });
  return response;
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
