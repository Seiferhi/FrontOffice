const statut = (state = '', action) => {
  switch (action.type) {
    case "SET_LIEU_FILTER":
      return (state = action.lieu);
    default:
      return state
  }
}
export default statut;