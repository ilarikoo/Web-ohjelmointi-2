const appReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    //asettaa tilaksi payloadina annetun urheilijalistan
    case "GET_URHEILIJAT":
      return {
        ...state,
        urheilijat: payload,
      };
    //asettaa tilaksi payloadina annetun urheilijan
    case "GET_URHEILIJA":
      return {
        ...state,
        urheilijat: payload,
      };
    //poista staten urheilijalistasta payloadina annetun urheilijan
    case "DELETE_URHEILIJA":
      return {
        ...state,
        urheilijat: state.urheilijat.filter(
          (urheilija) => urheilija.id !== action.payload
        ),
      };
    //lisää staten urheilijalistaan payloadina annetun urheilijan
    case "ADD_URHEILIJA":
      return {
        ...state,
        urheilijat: [action.payload, ...state.urheilijat],
      };

    default:
      return state;
  }
  throw Error("Unknown action: " + action.type);
};

export default appReducer;
