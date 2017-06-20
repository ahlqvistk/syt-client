import {connect} from 'preact-redux';

import Title from './title';
import {actions} from '../../ducks';

const mapStateToProps = (state) => {
  return {
    title: state.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInput: (e) => {
      dispatch(actions.titleChanged(e.target.value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);
