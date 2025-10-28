import { useReducer } from "react";
import PropTypes from "prop-types";
import appReducer from "./AppReducer";
import UrheilijatContext from "./UrheilijatContext";
import { GET_URHEILIJAT } from "./types";
import { GET_URHEILIJA } from "./types";
import { ADD_URHEILIJA } from "./types";
import axios from "axios";

const GlobalState = (props) => {
  //initial state
  let initialState = {
    urheilijat: [],
  };

  //State pitää yllä listaa urheilijoista. Se päivitetään appReducerissa määritetyillä eri toiminnoilla
  const [state, dispatch] = useReducer(appReducer, initialState);

  //Kaikkien urheilijoiden hakeminen
  const getUrheilijat = async () => {
    try {
      let res = await axios.get("http://localhost:3000/urheilija/");
      console.log("GET_URHEILIJAT:");

      let { data } = res;
      dispatch({ type: GET_URHEILIJAT, payload: data.urheilijat });
    } catch (error) {
      console.error(error);
    }
  };

  //Urheilijan hakeminen
  const getUrheilija = async (id) => {
    try {
      let sql = "http://localhost:3000/urheilija/" + id;
      let res = await axios.get(sql);

      console.log("GET_URHEILIJA:");

      dispatch({ type: GET_URHEILIJA, payload: res.data });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  //Urheilijan lisäys
  const addUrheilija = async (uusiUrheilija) => {
    try {
      await axios
        .post(`http://localhost:3000/urheilija/`, uusiUrheilija)
        .then((res) => {
          dispatch({ type: ADD_URHEILIJA, payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  //Urheilijan päivitys
  const setUrheilija = async (id, paivitettyUrheilija) => {
    try {
      console.log(JSON.stringify(state));
      await axios
        .put(`http://localhost:3000/urheilija/${id}`, paivitettyUrheilija)
        //Haetaan päivitetty urheilijalista
        .then(getUrheilijat());
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUrheilija = async (id) => {
    try {
      let sql = "http://localhost:3000/urheilija/" + id["id"];
      await axios.delete(sql).then((res) => {
        dispatch({ type: DELETE_URHEILIJA, payload: res.data });
        console.log(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UrheilijatContext.Provider
      value={{
        urheilijat: state.urheilijat,
        getUrheilijat,
        getUrheilija,
        addUrheilija,
        setUrheilija,
        deleteUrheilija,
      }}
    >
      {props.children}
    </UrheilijatContext.Provider>
  );
};
GlobalState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalState;
