import React from 'react';
import useApi from '../hooks/useApi';
import { FavoriteActions, favoriteCardsReducer } from '../reducer/favoriteCardsReducer';
import { Result, Root } from '../types/data';
import { API_BASE_URL, mockResponse, FAVORITES_KEY } from '../util/constants';
import isBrowser from '../util/isBrowser';
import Storage from '../util/storage';

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
  //@ts-ignore
  const [initializeState] = React.useState<Result[]>(() => {
    const storage = new Storage();
    const localData: Result[] | null = storage.getUnserialize(FAVORITES_KEY);
    if (localData !== null) {
      return localData;
    }
  });

  const [state, dispatch] = React.useReducer(favoriteCardsReducer, initializeState);

  React.useEffect(() => {
    if (isBrowser()) {
      const storage = new Storage();

      if (!!state) {
        console.log(11111);
        storage.setSerialize(FAVORITES_KEY, state);
      }
    }
  }, [state, initializeState]);

  console.log({ initializeState, state });

  return (
    <Context.Provider
      value={{
        default: data.results,
        favorites: initializeState,
        dispatch: dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GlobalContext;
