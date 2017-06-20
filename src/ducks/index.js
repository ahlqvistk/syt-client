import {combineReducers} from 'redux';
import * as title from './title';

export const types = {
  ...title.types,
};

export const actions = {
  ...title.actions,
};

export default combineReducers({
  title: title.reducer,
});
