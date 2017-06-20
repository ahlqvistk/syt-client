const TITLE_CHANGED = 'TITLE_CHANGED';

export const types = {
  TITLE_CHANGED,
};

const titleChanged = (val) => ({
  type: TITLE_CHANGED,
  payload: val,
});

export const actions = {
  titleChanged,
};

export const reducer = (state = '', action) => {
  switch (action.type) {
    case TITLE_CHANGED:
      return action.payload;
    default:
      return state;
  }
};
