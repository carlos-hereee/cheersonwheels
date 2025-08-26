import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "@utils/context/auth/AuthInstance";
// import { LogContext } from "@utils/context/log/LogInstance";

const PublicRoute = () => {
  const { accessToken } = useContext(AuthContext);
  // const { setPage } = useContext(LogContext);

  useEffect(() => {
    // setPage("public");
  }, [accessToken]);

  return <Outlet />;
};
export default PublicRoute;
