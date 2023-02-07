const defaultConfigureState = [];
const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';

export const ConfigureStateReducer = (
  state = defaultConfigureState,
  action,
) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export const statusAction = () => ({
  type: CHECK_STATUS,
});
