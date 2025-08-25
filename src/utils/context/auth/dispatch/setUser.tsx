import { A_AUTH } from "@utils/actions/AuthActions";
import { userMinData } from "@app/userMinData";
import type { AuthDispatchProps } from "auth-context";

export const setUser = ({ user, dispatch, setUserData }: AuthDispatchProps) => {
  if (!user) throw Error("user is required");
  const formatUser = userMinData(user);
  dispatch({ type: A_AUTH.IS_LOADING, payload: true });
  dispatch({ type: A_AUTH.SET_USER_DATA, payload: formatUser });
  if (setUserData) setUserData(user);
  if (user.ownedApps) dispatch({ type: A_AUTH.SET_OWNED_APPS, payload: user.ownedApps });
  if (user.subscriptions) dispatch({ type: A_AUTH.SET_SUBSCRIPTIONS, payload: user.subscriptions });
  if (user.messages) dispatch({ type: A_AUTH.SET_USER_MESSAGES, payload: user.messages });
  if (user.orders) dispatch({ type: A_AUTH.SET_ORDERS, payload: user.orders });
  if (user.notifications) dispatch({ type: A_AUTH.SET_NOTIFICATIONS, payload: user.notifications });
  if (user.accountTier) dispatch({ type: A_AUTH.SET_ACCOUNT_TIER, payload: user.accountTier });
  if (user.accountTiers) dispatch({ type: A_AUTH.SET_ACCOUNT_TIERS, payload: user.accountTiers });
  if (user.isPlatformOwner) dispatch({ type: A_AUTH.SET_PLATFORM_OWNER, payload: user.isPlatformOwner });
  if (user.contacts) dispatch({ type: A_AUTH.SET_USER_CONTACTS, payload: user.contacts });
  if (user.likePosts) dispatch({ type: A_AUTH.SET_LIKED_POSTS, payload: user.likePosts });
  if (user.likeMessages) dispatch({ type: A_AUTH.SET_LIKE_MESSAGES, payload: user.likeMessages });
  if (user.notificationSettings)
    dispatch({ type: A_AUTH.SET_NOTIFICATION_SETTINGS, payload: user.notificationSettings });
  dispatch({ type: A_AUTH.IS_LOADING, payload: false });
};
