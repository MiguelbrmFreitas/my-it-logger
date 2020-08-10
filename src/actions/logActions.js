import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG } from './types';

// export const getLogs = async dispatch => {
//    try {
//         setLoading();

//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//    } catch (err) {
//        dispatch({
//            type: LOGS_ERROR,
//            payload: err.response.data
//        })
//    }
    
// }

// Get logs from server
export const getLogs = () => {
  return async dispatch => {
    try {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
  };
};

// Add log
export const addLog = log => {
    return async dispatch => {
      try {
          setLoading();
  
          const res = await fetch('/logs', {
              method: 'POST',
              body: JSON.stringify(log),
              headers: {
                  'Content-Type': 'application/json'
              }
          });
          const data = await res.json();
  
          dispatch({
              type: ADD_LOG,
              payload: data
          })
      } catch (err) {
          dispatch({
              type: LOGS_ERROR,
              payload: err.response.data
          })
      }
    };
};

// Delete log
export const deleteLog = id => {
    return async dispatch => {
      try {
          setLoading();
  
          const res = await fetch(`/logs/${id}`, {
              method: 'DELETE'
          });
          const data = await res.json();
  
          dispatch({
              type: DELETE_LOG,
              payload: id
          })
      } catch (err) {
          dispatch({
              type: LOGS_ERROR,
              payload: err.response.data
          })
      }
    };
  };


export const setLoading = () => {
    return {
        type: SET_LOADING
    }
} 