import { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "@utils/context/auth/AuthContext";
import { MediaContext } from "@utils/context/media/MediaContext";
import { LogContext } from "@utils/context/log/LogInstance";

const PrivateRoute = () => {
  const { accessToken } = useContext(AuthContext);
  const { getPosts } = useContext(MediaContext);
  const { setPage } = useContext(LogContext);
  const { pathname } = useLocation();

  useEffect(() => {
    setPage("private");
    getPosts("");
  }, [pathname]);

  return accessToken ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoute;
