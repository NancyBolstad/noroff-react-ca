import React from 'react';
import { Root, Result } from '../types/data';
import { API_BASE_URL, mockResponse } from '../util/constants';
import { favoriteCardsReducer, FavoriteActions } from '../reducer/favoriteCardsReducer';
import useApi from '../hooks/useApi';

interface Props {}

interface GlobalDataProps {
  default: Result[];
  favorites: Result[];
  dispatch: React.Dispatch<FavoriteActions>;
}

export const Context = React.createContext<GlobalDataProps>({
  default: [],
  favorites: [],
  dispatch: () => null,
});

export const GlobalContext: React.FunctionComponent<Props> = ({ children }) => {
  const { data } = useApi<Root>({
    endpoint: API_BASE_URL,
    fetchOnMount: true,
    initialData: mockResponse,
  });
  const initializeState: Result[] = [];

  const [state, dispatch] = React.useReducer(favoriteCardsReducer, initializeState);

  return (
    <Context.Provider
      value={{
        default: data.results,
        favorites: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GlobalContext;
