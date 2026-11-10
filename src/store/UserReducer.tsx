import { FETCH_MOVIES, LOGIN, LOGOUT } from './Types';

const initialState = {
  isSignedIn: false,
  username: '',
  password: '',
  movies: [] as any[],
};

type UserType = {
  type: string;
  payload: any;
};

export default (state = initialState, { type, payload }: UserType) => {
  switch (type) {
    case LOGIN:
      return { ...state, isSignedIn: payload };
    case LOGOUT:
      return { ...state, isSignedIn: payload };
    case FETCH_MOVIES:
      return { ...state, movies: payload };
    default:
        return state
  }
};
