import { connect } from 'react-redux';
import { RestaurantPageMain } from './RestaurantPageMain';
import { selectRestaurantSectionsEntities } from '../../store/selectors';

const ImprovedRestaurantPageMain = connect(
  state => ({
    sectionItems: selectRestaurantSectionsEntities(state),
  })
)(RestaurantPageMain);

export {
  ImprovedRestaurantPageMain as RestaurantPageMain,
};
