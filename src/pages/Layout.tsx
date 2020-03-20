import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ThemeWrapper from '../components/ThemeWrapper';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Home from './Home';

const News = lazy(() => import('./News'));
const Contact = lazy(() => import('./Contact'));
const Success = lazy(() => import('./Success'));

interface Props {}

const Layout: React.FunctionComponent<Props> = () => {
  return (
    <ThemeWrapper>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/success">
              <Suspense fallback={<Loader />}>
                <Success />
              </Suspense>
            </Route>
            <Route path="/contact">
              <Suspense fallback={<Loader />}>
                <Contact />
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
