import { Root } from '../types/details';

export const API_BASE_URL: string = 'https://api.rawg.io/api/games';
export const PLACE_HOLDER: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
export const mockCardDetails: Root = {
  id: 0,
  slug: '',
  name: '',
  description: '',
  website: '',
  background_image: '',
  genres: [{ id: 0, name: '', slug: '', games_count: 0, image_background: '' }],
  platforms: [
    {
      platform: {
        id: 0,
        name: '',
        slug: '',
        image: '',
        year_end: '',
        year_start: '',
        games_count: 0,
        image_background: '',
      },
      released_at: '',
    },
  ],
};
