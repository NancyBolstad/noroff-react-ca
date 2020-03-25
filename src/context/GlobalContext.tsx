import React from 'react';
import { Root, Result } from '../types/data';
import { API_BASE_URL } from '../util/constants';
import { favoriteCardsReducer, FavoriteActions } from './reducers';

interface Props {}

interface GlobalDataProps {
  default: Result[];
  favorites: Result[];
  dispatch: React.Dispatch<FavoriteActions>;
}

export let Context = React.createContext<GlobalDataProps>({
  default: [],
  favorites: [],
  dispatch: () => null,
});

export const GlobalContext: React.FunctionComponent<Props> = ({ children }) => {
  const [data, setData] = React.useState<Result[]>([]);

  //@ts-ignore
  const initializeState: Result[] = JSON.parse(window.localStorage.getItem('favorites'));

  //@ts-ignore
  const [state, dispatch] = React.useReducer(favoriteCardsReducer, initializeState);

  async function getAllCards() {
    try {
      const response = await fetch(API_BASE_URL);
      const data: Root = await response.json();
      console.log(data);
      setData(data.results);

      return data;
    } catch (err) {
      throw err;
    }
  }

  React.useEffect(() => {
    getAllCards();
  }, []);

  return (
    <Context.Provider
      value={{
        default: data,
        favorites: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GlobalContext;
