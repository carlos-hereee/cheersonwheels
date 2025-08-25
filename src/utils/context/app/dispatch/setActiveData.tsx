import { A_APP } from "@utils/actions/AppActions";
import type { AppDispatchProps } from "app-context";

export const setActiveData = ({ dispatch, menu, appName, logo, media, appId, themeList }: AppDispatchProps) => {
  dispatch({ type: A_APP.IS_LOADING, payload: true });
  if (menu) dispatch({ type: A_APP.SET_ACTIVE_MENU, payload: menu });
  if (logo) dispatch({ type: A_APP.SET_ACTIVE_LOGO, payload: logo });
  if (themeList) dispatch({ type: A_APP.SET_THEME_LIST, payload: themeList });
  if (media) dispatch({ type: A_APP.SET_ACTIVE_MEDIA, payload: media });
  if (appId) dispatch({ type: A_APP.SET_ACTIVE_APP_ID, payload: appId });
  if (appName) {
    document.title = appName;
    dispatch({ type: A_APP.SET_ACTIVE_APP_NAME, payload: appName });
  }
  dispatch({ type: A_APP.IS_LOADING, payload: false });
};
