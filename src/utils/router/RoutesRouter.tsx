import { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { PageNotFound } from "nexious-library";
import PublicRoute from "./PublicRoute";
import Landing from "@pages/Landing";
import { AuthContext } from "@utils/context/auth/AuthInstance";

const RoutesRouter = () => {
  const { accessToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const navigateClick = () => navigate(accessToken ? "/dashboard" : "/");
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        {/* // if server not coaperating use offline data */}
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/logout" element={<Logout />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/checkout/success" element={<CheckoutSuccess />} /> */}
        {/* <Route path="/invite/success" element={<InvitationSuccess />} /> */}
        {/* <Route path="/checkout/error" element={<CheckoutSuccess />} /> */}
        {/* <Route path="/feed" element={<ViewPostFeed />} /> */}
        {/* <Route path="/feed/post" element={<CreatePostFeed />} /> */}
        <Route path="/" element={<Landing />} />
      </Route>

      {/* Private routes for account holders and authorized user */}
      {/* <Route element={<PrivateRoute />}>
        <Route
          path="/dashboard/notifications"
          element={
            <Notification
              notifications={notifications}
              clearNotification={clearNotification}
            />
          }
        /> */}
      {/* <Route path="/dashboard" element={<UserPlayground />} />
        <Route path="/dashboard/task-board" element={<UserTaskBoard />} />
        <Route
          path="/dashboard/task-board/:boardId"
          element={<ViewUserTaskBoard />}
        />
        <Route path="/dashboard/calendar" element={<UserCalendar />} />
      </Route>
      <Route element={<AdminRoute />}>
        <Route path="/settings/:appName" element={<AppSettings />} />
      </Route> */}
      {/* All other routes */}
      <Route path="/*" element={<PageNotFound to={accessToken ? "dashboard" : "home"} handleClick={navigateClick} />} />
    </Routes>
  );
};
export default RoutesRouter;
