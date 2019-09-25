export const addFilter = filter => dispatch => {
  console.log(filter);
  dispatch({
    type: "ADD_FILTER",
    payload: filter
  });
};
