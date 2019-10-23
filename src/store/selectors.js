import { createSelector } from 'reselect';

const rootSelector = state => state;

export const selectRestaurantsList = createSelector(
  rootSelector,
  ({ restaurantsData }) => {
    if (!restaurantsData) {
      return [];
    }

    const { feedItems, storesMap } = restaurantsData;

    return feedItems.map(({ uuid }) => storesMap[uuid]);
  },
);

export const searchRestaurantsData = createSelector(
  rootSelector,
  ({ search }) => search
);

export const selectRestaurantsListError = createSelector(
  rootSelector,
  ({ error }) => error
);

export const selectIsLoading = createSelector(
  rootSelector,
  ({ isLoading }) => isLoading
);
