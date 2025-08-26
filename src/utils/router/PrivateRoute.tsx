// import { useContext, useEffect } from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { MediaContext } from "@utils/context/media/MediaContext";
// import { LogContext } from "@utils/context/log/LogInstance";
// import { AuthContext } from "@utils/context/auth/AuthInstance";

// const PrivateRoute = () => {
//   const { accessToken } = useContext(AuthContext);
//   const { getPosts } = useContext(MediaContext);
//   const { setPage } = useContext(LogContext);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     setPage("private");
//     getPosts("");
//   }, [pathname]);

//   return accessToken ? <Outlet /> : <Navigate to="/" />;
// };
// export default PrivateRoute;
