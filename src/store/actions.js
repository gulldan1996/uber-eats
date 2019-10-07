export const ACTION_TYPE = {
  SAVE_RESTOURANTS: 'SAVE_RESTOURANTS',
  SET_LOAD_RESTAURANTS_ERROR: 'SET_LOAD_RESTAURANTS_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
};

const saveRestaurants = data => ({
  type: ACTION_TYPE.SAVE_RESTOURANTS,
  payload: data,
});

const setRestaurantsError = error => ({
  type: ACTION_TYPE.SET_LOAD_RESTAURANTS_ERROR,
  payload: error,
});

const startLoading = () => ({
  type: ACTION_TYPE.START_LOADING,
});

const stopLoading = () => ({
  type: ACTION_TYPE.STOP_LOADING,
});

export const loadRestaurants = () => (dispatch) => {
  dispatch(startLoading());
  fetch('https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants')
    .then(res => res.json())
    .then(({ data }) => {
      dispatch(saveRestaurants(data));
    })
    .catch(error => dispatch(setRestaurantsError(error.message)))
    .finally(() => dispatch(stopLoading()));
};
