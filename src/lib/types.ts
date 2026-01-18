export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface Item {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string; // For the mock player
  duration: string;
  genre: string[];
  rating: string; // e.g. "Match 98%"
  year: number;
  featured?: boolean;
}

export interface Category {
  id: string;
  title: string;
  items: Item[];
}
