import axios from "axios";

import * as actions from "./ActionsDef";

export const getAnnouncementsList = queries => async dispatch => {
  let queriesObject = Object.keys(queries);
  let query = "?";
  queriesObject.map(el => {
    if (queries[el] !== "") query += `${el}=${queries[el]}&`;
  });
  query = query.slice(0, query.length);
  console.log(queriesObject);
  try {
    let response = await axios({
      method: "GET",
      url: `/bienImmobiliers/all${query}`
    });
    dispatch({
      type: actions.FETCH_ANNONCEMENT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: actions.FETCH_ANNONCEMENT_FAILURE,
      payload: "Fetching announements list failed, please to terty "
    });
  }
};
