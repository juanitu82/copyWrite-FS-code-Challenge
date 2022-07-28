export function getResponses() {
    return async (dispatch) => {
      try {
        return await dispatch({
          type: 'GET_RESPONSES'
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

  export const setResponse = (payload) => {
    return async(dispatch) => {
        try {
            return await dispatch({
                type: 'SET_RESPONSE',
                payload
              });
        } catch (err) {
          console.log(err);
        }
    }
  };
  