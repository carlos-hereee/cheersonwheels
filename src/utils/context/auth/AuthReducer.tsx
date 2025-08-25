import { A_AUTH } from "@utils/actions/AuthActions";
import type { AuthStateProps, AuthActionProps } from "auth-context";

export const reducer = (state: AuthStateProps, action: AuthActionProps): AuthStateProps => {
  switch (action.type) {
    case A_AUTH.IS_LOADING:
      return { ...state, isLoading: action.payload };
    case A_AUTH.SET_ERROR:
      return { ...state, authErrors: { ...state.authErrors, ...action.payload } };
    case A_AUTH.SET_SUBSCRIPTIONS:
      return { ...state, subscriptions: action.payload };
    case A_AUTH.SET_USER_MESSAGES:
      return { ...state, messages: action.payload };
    case A_AUTH.SET_UPDATE_TIER:
      return { ...state, tierUpdate: action.payload };
    case A_AUTH.SET_ORDERS:
      return { ...state, orders: action.payload };
    case A_AUTH.SET_LIKE_MESSAGES:
      return { ...state, likeMessages: action.payload };
    case A_AUTH.SET_ACCOUNT_TIERS:
      return { ...state, accountTiers: action.payload };
    case A_AUTH.SET_ACCOUNT_TIER:
      return { ...state, accountTier: action.payload };
    case A_AUTH.SET_PLATFORM_OWNER:
      return { ...state, isPlatformOwner: action.payload };
    case A_AUTH.SET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };
    case A_AUTH.SET_DUMMY_DATA:
      return { ...state, dummyUser: action.payload };
    case A_AUTH.SET_LIKED_POSTS:
      return { ...state, likePosts: action.payload };
    case A_AUTH.SET_OWNED_APPS:
      return { ...state, ownedApps: action.payload };
    case A_AUTH.SET_ACCESS_TOKEN:
      return { ...state, accessToken: action.payload };
    case A_AUTH.SET_USER_DATA:
      return { ...state, user: action.payload };
    case A_AUTH.SET_THEME:
      return { ...state, theme: action.payload };
    case A_AUTH.SET_NOTIFICATION_SETTINGS:
      return { ...state, notificationSettings: action.payload };
    // case A_AUTH.UPDATE_SHIPPING_DETAILS:
    //   return { ...state, shippingDetails: action.payload };
    // case A_AUTH.SET_CHANGE_PASSWORD:
    //   return {
    // case A_AUTH.UPDATE_LANGUAGE:
    //   return { ...state, language: action.payload };
    // case A_AUTH.SET_APP_ID:
    //   return { ...state, appId: action.payload };
    // case A_AUTH.SET_PERMSSIONS:
    //   return { ...state, permissions: action.payload };
    //     ...state,
    // case A_AUTH.SIGN_IN_ERROR:
    //   return { ...state, authErrors: { ...state.authErrors, signInError: action.payload } };
    // case A_AUTH.LOGOUT_ERROR:
    //   return { ...state, authErrors: { ...state.authErrors, logOutError: action.payload } };
    // case A_AUTH.FORGOT_PASSWORD_ERROR:
    //   return { ...state, authErrors: { ...state.authErrors, forgotPasswordError: action.payload } };
    // case A_AUTH.CHANGE_PASSWORD_ERROR:
    //   return { ...state, authErrors: { ...state.authErrors, changePasswordError: action.payload } };
    // case A_AUTH.SIGN_UP_ERROR:
    //   return { ...state, authErrors: { ...state.authErrors, signUpError: action.payload } };
    // case A_AUTH.SET_STRANDED:
    //   return { ...state, authErrors: { ...state.authErrors, serverIsOffline: action.payload } };
    //     signInError: action.payload,
    //     emergencyPasswordChangeIsRequired: action.payload ? true : false,
    //   };
    default:
      return state;
  }
};
