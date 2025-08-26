// import { useContext, useEffect } from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { AuthContext } from "@utils/context/auth/AuthInstance";
// import { AppContext } from "@utils/context/app/AppContext";
// import { MediaContext } from "@utils/context/media/MediaContext";
// import { LogContext } from "@utils/context/log/LogInstance";

// const AdminRoute = () => {
//   const { accessToken, isLoading: isAuthLoading } = useContext(AuthContext);
//   const { isLoading: isAppLoading, getAppWithName, appLink, appId } = useContext(AppContext);
//   const { pathname } = useLocation();
//   const { getPosts } = useContext(MediaContext);
//   const { setPage } = useContext(LogContext);

//   useEffect(() => {
//     setPage("private");
//     const query = pathname.split("/");
//     const routeAppName = query[query.length - 1];

//     getPosts(appId);
//     if (routeAppName !== appLink) getAppWithName(routeAppName);
//   }, [pathname]);

//   if (isAppLoading) return <Outlet />;
//   if (isAuthLoading) return <Outlet />;
//   if (!accessToken) return <Navigate to="/" />;
//   // TODO: check user is app owner
//   // if (accessToken && user.userId !== owner.userId) return <Navigate to="/" />;
//   return <Outlet />;
// };
// export default AdminRoute;
