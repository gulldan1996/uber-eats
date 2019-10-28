export const ACTION_TYPE = {
  SAVE_RESTOURANTS: 'SAVE_RESTOURANTS',
  SET_LOAD_RESTAURANTS_ERROR: 'SET_LOAD_RESTAURANTS_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  GIVE_TO_UUID: 'GIVE_TO_UUID',
  SAVE_RESTAURANT_INFO: 'SAVE_RESTAURANTS_INFO',
};

export const giveToUuid = (uuid) => {
  fetch(`https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/${uuid}`)
    .then(res => res.json())
    .then(rs => console.log(rs));

  return {
    type: ACTION_TYPE.GIVE_TO_UUID,
    payload: uuid,
  };
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

const saveRestaurantInfo = data => ({
  type: ACTION_TYPE.SAVE_RESTAURANT_INFO,
  payload: data,
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

export const loadRestaurantInfo = id => (dispatch) => {
  dispatch(startLoading());

  fetch(`https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/${id}`)
    .then(result => result.json())
    .then(({ data }) => dispatch(saveRestaurantInfo(data)))
    .catch(error => dispatch(setRestaurantsError(error)))
    .finally(() => dispatch(stopLoading()));
};
