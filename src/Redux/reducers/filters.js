const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FILTER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default filtersReducer;

var initialState = {
  titre: "",
  region: "",
  categorie: "",
  statut: "",
  nombreChambre: "",
  nombreSalleDeBain: "",
  surface: "",
  prix: "",
  nombreGarage: "",
  nombreSalon: ""
};
