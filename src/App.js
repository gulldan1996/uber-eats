import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.scss';
import { store } from './store/reducers';
import { RestaurantsListPage } from './components/RestaurantsListPage';
import { RestaurantPage } from './components/RestaurantPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const App = () => (
  <Provider store={store}>
    <Header />
    <main className="page">
      <Route
        path="/:id"
        component={RestaurantPage}
      />
      <div className="content">
        <Route
          exact
          path="/"
          component={RestaurantsListPage}
        />
      </div>
    </main>
    <Footer />
  </Provider>
);
