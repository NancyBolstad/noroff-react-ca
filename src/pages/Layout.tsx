import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ThemeWrapper from '../components/ThemeWrapper';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Home from './Home';

const News = lazy(() => import('./News'));
const Login = lazy(() => import('./Login'));
const Profile = lazy(() => import('./Profile'));

interface Props {}

const Layout: React.FunctionComponent<Props> = () => {
  return (
    <ThemeWrapper>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/profile">
              <Suspense fallback={<Loader />}>
                <Profile />
              </Suspense>
            </Route>
            <Route path="/login">
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            </Route>
            <Route path="/news">
              <Suspense fallback={<Loader />}>
                <News />
              </Suspense>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeWrapper>
  );
};

export default Layout;
