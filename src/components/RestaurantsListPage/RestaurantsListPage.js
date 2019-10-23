import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import './RestaurantsListPage.scss';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';
import { Restaurant } from '../Restaurant/Restaurant';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export class RestaurantsListPage extends Component {
  componentDidMount() {
    const { loadRestaurants } = this.props;

    loadRestaurants();
  }

  render() {
    const {
      restaurantsData,
      error,
      isLoading,
    } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <Error message={error} />;
    }

    return (
      <Switch>
        <div className="restaurants-list">
          {restaurantsData.map((restaurant) => {
            const {
              uuid,
              title,
              categories,
              heroImageUrl,
              etaRange,
            } = restaurant;

            return (
              <Route path="/RestaurantList" key={uuid}>
                <RestaurantCard
                  key={uuid}
                  uuid={uuid}
                  title={title}
                  categories={categories}
                  imageUrl={heroImageUrl}
                  etaRange={etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
                />
              </Route>
            );
          })}
          <Route path="/Restaurant">
            <Restaurant />
          </Route>
        </div>
      </Switch>
    );
  }
}

RestaurantsListPage.propTypes = {
  restaurantsData: PropTypes.arrayOf(PropTypes.shape({})),
  loadRestaurants: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

RestaurantsListPage.defaultProps = {
  restaurantsData: [],
  error: null,
  isLoading: false,
};
