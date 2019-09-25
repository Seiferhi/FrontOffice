import * as actions from "../ActionsDef";

let announcementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ANNONCEMENT_SUCCESS:
      return { ...state, announcements: action.payload, error: "" };
    default:
      return state;
  }
};

export default announcementsReducer;

const initialState = {
  announcements: [],
  error: "",
  collectionLength: 0
};
