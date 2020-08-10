import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    UPDATE_TECH,
    SET_LOADING,
    TECHS_ERROR
  } from './types';

  // Get techs from server
  export const getTechs = () => {
    return async dispatch => {
        try {
            setLoading();
    
            const res = await fetch('/techs');
            const data = await res.json();
    
            dispatch({
                type: GET_TECHS,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: TECHS_ERROR,
                payload: err.response.statusText
            })
        }
      };
  };

  // Add Tech to server
  export const addTech = tech => {
    return async dispatch => {
        try {
            setLoading();
    
            const res = await fetch('/techs', {
                method: 'POST',
                body: JSON.stringify(tech),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
    
            dispatch({
                type: ADD_TECH,
                payload: data
            })
        } catch (err) {
            dispatch({
                type: TECHS_ERROR,
                payload: err.response.statusText
            })
        }
      };
  };

  // Set loading
  export const setLoading = () => {
    return {
        type: SET_LOADING
    }
} 