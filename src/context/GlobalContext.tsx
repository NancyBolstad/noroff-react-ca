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

const storage = new Storage();

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
  const [localData, setLocalData] = React.useState<Result[]>([]);

  React.useEffect(() => {
    if (isBrowser()) {
      const storageTheme = storage.getUnserialize<Result[]>(FAVORITES_KEY);

      if (storageTheme !== null) {
        console.log(11111);
        setLocalData(storageTheme);
      }
    }
  }, []);

  const [state, dispatch] = React.useReducer(favoriteCardsReducer, localData);

  console.log({ localData, state });

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
