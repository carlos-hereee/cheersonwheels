// import { useContext, useEffect } from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { AppContext } from "@utils/context/app/AppContext";
// import { LogContext } from "@utils/context/log/LogInstance";

// const AppRoute = () => {
//   const { isOnline, appError } = useContext(AppContext);
//   const { appName, getAppWithName } = useContext(AppContext);
//   const { setPage } = useContext(LogContext);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     setPage("app");
//     // fetch app data
//     const routeAppName = pathname.split("/")[2];
//     if (appName !== routeAppName) getAppWithName(routeAppName);
//   }, [pathname]);

//   if (!isOnline) return <Navigate to="/offline" />;
//   if (appError) return <Navigate to="/" />;
//   return <Outlet />;
// };
// export default AppRoute;
