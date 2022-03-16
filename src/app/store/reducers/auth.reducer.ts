import { initialAuthState, IAuthState } from '../states/auth.state';
import { AuthActions, EAuthActions } from '../actions/auth.actions';

export const authReducer = (
  state = initialAuthState,
  action: AuthActions
): IAuthState => {
  switch (action.type) {
    case EAuthActions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userAuthData: action.payload,
      };
    case EAuthActions.LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload,
      };
    case EAuthActions.REGISTRATION_SUCCESS:
      return {
        ...state,
        registrateResult: action.payload,
      };
    case EAuthActions.REGISTRATION_FAILURE:
      return {
        ...state,
        registrateError: action.payload,
      };
    case EAuthActions.IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case EAuthActions.LOGOUT:
      return {
        ...state,
        userAuthData: {
          accessToken: '',
          username: '',
          roles: [],
        },
      };
    case EAuthActions.ERASE_LOGIN_ERROR:
      return {
        ...state,
        loginError: null,
      };
    case EAuthActions.ERASE_REGISTRATE_ERROR:
      return {
        ...state,
        registrateError: null,
      };
    default:
      return state;
  }
};
