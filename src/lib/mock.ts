import { Item, Category, User } from './types';

export const mockUser: User = {
  id: 'u1',
  name: 'Maxance',
  email: 'test@cacaflix.com'
};

export const mockMovies: Item[] = [
  {
    id: 'm1',
    title: 'Dark',
    description:
      'A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: '3 Seasons',
    genre: ['Sci-Fi', 'Thriller', 'Mystery'],
    rating: '98% Match',
    year: 2017,
    featured: true,
  },
  {
    id: 'm2',
    title: 'Stranger Things',
    description:
      'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&q=80',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    duration: '4 Seasons',
    genre: ['Sci-Fi', 'Horror'],
    rating: '99% Match',
    year: 2016,
  },
  {
    id: 'm3',
    title: 'The Crown',
    description:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    thumbnailUrl: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=800&q=80',
    videoUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    duration: '6 Seasons',
    genre: ['Drama', 'History'],
    rating: '95% Match',
    year: 2016,
  },
  {
    id: 'm4',
    title: 'Black Mirror',
    description:
      "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    thumbnailUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    videoUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    duration: '6 Seasons',
    genre: ['Sci-Fi', 'Drama'],
    rating: '96% Match',
    year: 2011,
  },
  {
    id: 'm5',
    title: 'Money Heist',
    description:
      'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1559583109-3e7968136c99?w=800&q=80',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    duration: '5 Parts',
    genre: ['Crime', 'Thriller'],
    rating: '97% Match',
    year: 2017,
  },
  {
    id: 'm6',
    title: 'Our Planet',
    description:
      "Experience our planet's natural beauty and examine how climate change impacts all living creatures in this ambitious documentary of spectacular scope.",
    thumbnailUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    videoUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    duration: '1 Season',
    genre: ['Documentary', 'Nature'],
    rating: '99% Match',
    year: 2019,
  },
  {
    id: 'm7',
    title: 'The Witcher',
    description:
      'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
    videoUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    duration: '3 Seasons',
    genre: ['Fantasy', 'Action', 'Adventure'],
    rating: '94% Match',
    year: 2019,
  },
  {
    id: 'm8',
    title: 'Narcos',
    description:
      'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    duration: '3 Seasons',
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: '96% Match',
    year: 2015,
  },
  {
    id: 'm9',
    title: 'The Mandalorian',
    description:
      'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    duration: '3 Seasons',
    genre: ['Sci-Fi', 'Action', 'Adventure'],
    rating: '97% Match',
    year: 2019,
    featured: true,
  },
  {
    id: 'm10',
    title: 'Ozark',
    description:
      'A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
    videoUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    duration: '4 Seasons',
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: '93% Match',
    year: 2017,
  },
  {
    id: 'm11',
    title: 'Breaking Bad',
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing meth to secure his family's future.",
    thumbnailUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80',
    videoUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    duration: '5 Seasons',
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: '99% Match',
    year: 2008,
  },
  {
    id: 'm12',
    title: 'The Last of Us',
    description:
      "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
    thumbnailUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
    videoUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    duration: '1 Season',
    genre: ['Drama', 'Sci-Fi', 'Thriller'],
    rating: '98% Match',
    year: 2023,
    featured: true,
  },
  {
    id: 'm13',
    title: 'Peaky Blinders',
    description:
      'A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&q=80',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: '6 Seasons',
    genre: ['Crime', 'Drama'],
    rating: '95% Match',
    year: 2013,
  },
  {
    id: 'm14',
    title: 'The Umbrella Academy',
    description:
      "A dysfunctional family of superheroes comes together to solve the mystery of their father's death and the threat of an impending apocalypse.",
    thumbnailUrl: 'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=800&q=80',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    duration: '4 Seasons',
    genre: ['Sci-Fi', 'Action', 'Adventure'],
    rating: '91% Match',
    year: 2019,
  },
  {
    id: 'm15',
    title: 'Vikings',
    description:
      'Vikings transports us to the brutal world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore and raid the distant shores.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    videoUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    duration: '6 Seasons',
    genre: ['Action', 'Adventure', 'Drama'],
    rating: '92% Match',
    year: 2013,
  },
];

export const mockCategories: Category[] = [
  {
    id: 'trending',
    title: 'Tendances actuelles',
    items: [
      mockMovies[0],
      mockMovies[1],
      mockMovies[8],
      mockMovies[11],
      mockMovies[6],
      mockMovies[9],
      mockMovies[13],
      mockMovies[14],
    ],
  },
  {
    id: 'scifi',
    title: 'Science-fiction',
    items: [
      mockMovies[0],
      mockMovies[1],
      mockMovies[3],
      mockMovies[8],
      mockMovies[11],
      mockMovies[13],
    ],
  },
  {
    id: 'drama',
    title: 'Drames',
    items: [
      mockMovies[2],
      mockMovies[3],
      mockMovies[7],
      mockMovies[9],
      mockMovies[10],
      mockMovies[12],
    ],
  },
  {
    id: 'action',
    title: 'Action et Aventure',
    items: [mockMovies[6], mockMovies[8], mockMovies[13], mockMovies[14]],
  },
  {
    id: 'thriller',
    title: 'Thriller',
    items: [mockMovies[4], mockMovies[7], mockMovies[9], mockMovies[10], mockMovies[11]],
  },
  {
    id: 'crime',
    title: 'Crime',
    items: [mockMovies[4], mockMovies[7], mockMovies[9], mockMovies[10], mockMovies[12]],
  },
];
