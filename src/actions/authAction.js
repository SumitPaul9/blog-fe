import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE, TOGGLE_USER_LOADING } from "./types";
import { signupService, loginService, logoutService } from "../services/auth.service";



export const signup = (username, email, password) => async(dispatch) => {
    try {
        const response = await signupService(username, email, password);
        if(!response.accessToken) throw new Error;

        dispatch({
          type: SIGNUP_SUCCESS,
        });

        dispatch({
            type: SET_MESSAGE,
            payload: response.data.message,
          });

    } catch (error) {
          const message = error.message;
              
          dispatch({
              type: SIGNUP_FAIL,
            });
        
          await dispatch({
              type: SET_MESSAGE,
              payload: message,
            });
    }
}  
  
    
export const login = (username, password) => async(dispatch) => {
      try {
          const response = await loginService(username, password);
          if(!response.accessToken) throw new Error(response.error.message);

          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: response },
          });

          

      } catch (error) {
        const message = error;
            dispatch({
            type: LOGIN_FAIL,
          });
          
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
      }
    }

// export const toggleUserLoading = () => {
//   return {
//     type: TOGGLE_USER_LOADING;
//   }
// }
    
export const logout = () => (dispatch) => {
      logoutService();
      dispatch({
        type: LOGOUT,
      });
    };