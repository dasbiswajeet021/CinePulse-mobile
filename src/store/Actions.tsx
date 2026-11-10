import axios from 'axios';
import { LOGIN, LOGOUT, FETCH_MOVIES } from './Types';
import { Dispatch } from 'redux'

export const login = () => {
  return {
    type: LOGIN,
    payload: true,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: false,
  };
};

interface CredentialProps {
  username: string;
  password: string;
}

export const updateCredentials = (credentials: CredentialProps) => {
  return {
    type: 'UPDATE_CREDENTIALS_ACTION',
    payload: credentials,
  };
};

export const getMovies = () => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.get(
        'https://api.sampleapis.com/movies/animation',
      );
      dispatch({
        type: FETCH_MOVIES,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
