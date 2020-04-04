import { Result } from '../types/data';

type Action = 'alphabetically' | 'popularity';

interface SortActions {
  type: Action;
}

export const searchResultsReducer = (state: Result[], action: SortActions) => {
  switch (action.type) {
    case 'alphabetically':
      return [...state].sort((a, b) => a.name.localeCompare(b.name));
    case 'popularity':
      return [...state].sort((a, b) => b.rating - a.rating);
    default:
      return state;
  }
};

export default searchResultsReducer;
