import { A_APP } from "@utils/actions/AppActions";
import { AppActionProps, AppStateProps } from "app-context";

export const reducer = (state: AppStateProps, action: AppActionProps): AppStateProps => {
  switch (action.type) {
    case A_APP.IS_LOADING:
      return { ...state, isLoading: action.payload };
    case A_APP.SET_LOADING_STATE:
      return { ...state, loadingState: { ...state.loadingState, ...action.payload } };
    case A_APP.SET_THEME_LIST:
      return { ...state, themeList: action.payload };
    case A_APP.SET_APP_POSTS:
      return { ...state, posts: action.payload };
    case A_APP.SET_REQUEST_STATUS:
      return { ...state, requestStatus: action.payload };
    case A_APP.SET_APP_TASKS:
      return { ...state, taskBoard: action.payload };
    case A_APP.SET_APP_BOARD_TASKS:
      return { ...state, taskBoards: action.payload };
    case A_APP.SET_PLATFORM_TIERS:
      return { ...state, platformTiers: action.payload };
    case A_APP.SET_APP_MESSAGES:
      return { ...state, messages: action.payload };
    case A_APP.SET_APP_MESSAGE:
      return { ...state, appMessage: action.payload };
    case A_APP.SET_APP_USERS:
      return { ...state, appUsers: action.payload };
    case A_APP.SET_APP_SUBSCRIPTIONS:
      return { ...state, subscriptionTiers: action.payload };
    case A_APP.SET_ADMIN_IDS:
      return { ...state, adminIds: action.payload };
    case A_APP.SET_MEDIA_ITEM:
      return { ...state, socialMedia: action.payload };
    case A_APP.SET_REDIRECT_URL:
      return { ...state, redirectUrl: action.payload };
    case A_APP.SET_ACTIVE_MENU:
      return { ...state, activeMenu: action.payload };
    case A_APP.SET_ACTIVE_MEDIA:
      return { ...state, activeMedia: action.payload };
    case A_APP.SET_STORE_INVENTORY:
      return { ...state, inventory: action.payload };
    case A_APP.SET_NEWSLETTER:
      return { ...state, newsletter: action.payload };
    case A_APP.SET_APP_LIST:
      return { ...state, appList: action.payload };
    case A_APP.SET_APP_ID:
      return { ...state, appId: action.payload };
    case A_APP.SET_ACTIVE_PAGE:
      return { ...state, activePage: action.payload };
    case A_APP.SET_ACTIVE_APP_ID:
      return { ...state, activeAppId: action.payload };
    case A_APP.SET_STORE:
      return { ...state, store: action.payload };
    case A_APP.SET_MEDIA:
      return { ...state, media: action.payload };
    case A_APP.SET_PAGES:
      return { ...state, pages: action.payload };
    case A_APP.SET_PAGE:
      return { ...state, page: action.payload };
    case A_APP.SET_OWNER:
      return { ...state, owner: action.payload };
    case A_APP.SET_APP_NAME:
      return { ...state, appName: action.payload };
    case A_APP.SET_DB_VERSION:
      return { ...state, dbVersion: action.payload };
    case A_APP.SET_APP_URL:
      return { ...state, appUrl: action.payload };
    case A_APP.SET_APP_LINK:
      return { ...state, appLink: action.payload };
    case A_APP.SET_ACTIVE_APP_NAME:
      return { ...state, activeAppName: action.payload };
    case A_APP.SET_APP_ERROR:
      return { ...state, appError: action.payload };
    case A_APP.SET_LANDING:
      return { ...state, landing: action.payload };
    case A_APP.SET_CALENDAR:
      return { ...state, calendar: action.payload };
    case A_APP.SET_APP_LOGO:
      return { ...state, logo: action.payload };
    case A_APP.SET_ACTIVE_LOGO:
      return { ...state, activeLogo: action.payload };
    case A_APP.SET_APP_MAPS:
      return { ...state, maps: action.payload };
    case A_APP.SET_MENU:
      return { ...state, menu: action.payload };
    case A_APP.SET_LOCALE:
      return { ...state, locale: action.payload };
    case A_APP.SET_LANGUAGES:
      return { ...state, languageList: action.payload };
    case A_APP.SET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };

    default:
      throw new Error();
  }
};
// Photo by <a href=""></a> on <a href="">Unsplash</a>
