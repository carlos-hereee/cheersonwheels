// import { A_APP } from "@utils/actions/AppActions";
// import { formatAppUrl, readableUrlString } from "@app/formatStringUrl";
// import type { AppDispatchProps } from "app-context";

// export const setAppData = ({ dispatch, app, appList, store, page, platformTiers }: AppDispatchProps) => {
//   dispatch({ type: A_APP.IS_LOADING, payload: true });
//   if (app) {
//     // assign values if they exists
//     if (app.logo) dispatch({ type: A_APP.SET_APP_LOGO, payload: app.logo });
//     if (app.adminIds) dispatch({ type: A_APP.SET_ADMIN_IDS, payload: app.adminIds });
//     if (app.appId) dispatch({ type: A_APP.SET_APP_ID, payload: app.appId });
//     if (app.dbVersion) dispatch({ type: A_APP.SET_DB_VERSION, payload: app.dbVersion });
//     if (app.maps) dispatch({ type: A_APP.SET_APP_MAPS, payload: app.maps });
//     if (app.posts) dispatch({ type: A_APP.SET_APP_POSTS, payload: app.posts });
//     if (app.locale) dispatch({ type: A_APP.SET_LOCALE, payload: app.locale });
//     if (app.calendar) dispatch({ type: A_APP.SET_CALENDAR, payload: app.calendar });
//     if (app.landing) dispatch({ type: A_APP.SET_LANDING, payload: app.landing });
//     if (app.menu) dispatch({ type: A_APP.SET_MENU, payload: app.menu });
//     if (app.media) dispatch({ type: A_APP.SET_MEDIA, payload: app.media });
//     if (app.owner) dispatch({ type: A_APP.SET_OWNER, payload: app.owner });
//     if (app.themeList) dispatch({ type: A_APP.SET_THEME_LIST, payload: app.themeList });
//     if (app.notifications) dispatch({ type: A_APP.SET_NOTIFICATIONS, payload: app.notifications });
//     if (app.pages) dispatch({ type: A_APP.SET_PAGES, payload: app.pages });
//     if (app.languageList) dispatch({ type: A_APP.SET_LANGUAGES, payload: app.languageList });
//     if (app.store) dispatch({ type: A_APP.SET_STORE, payload: app.store });
//     if (app.newsletter) dispatch({ type: A_APP.SET_NEWSLETTER, payload: app.newsletter });
//     if (app.messages) dispatch({ type: A_APP.SET_APP_MESSAGES, payload: app.messages });
//     if (app.taskBoard) dispatch({ type: A_APP.SET_APP_TASKS, payload: app.taskBoard });
//     if (app.taskBoards) dispatch({ type: A_APP.SET_APP_BOARD_TASKS, payload: app.taskBoards });
//     if (app.appName) {
//       const appLink = readableUrlString(app.appName);
//       dispatch({ type: A_APP.SET_APP_LINK, payload: appLink });
//       dispatch({ type: A_APP.SET_APP_URL, payload: formatAppUrl(appLink) });
//       dispatch({ type: A_APP.SET_APP_NAME, payload: app.appName });
//     }
//   }
//   if (appList) dispatch({ type: A_APP.SET_APP_LIST, payload: appList });
//   if (store) {
//     dispatch({ type: A_APP.SET_STORE, payload: store });
//     dispatch({ type: A_APP.SET_STORE_INVENTORY, payload: store.inventory });
//   }
//   if (page) dispatch({ type: A_APP.SET_PAGE, payload: page });
//   if (platformTiers) dispatch({ type: A_APP.SET_PLATFORM_TIERS, payload: platformTiers });
//   dispatch({ type: A_APP.IS_LOADING, payload: false });
// };
