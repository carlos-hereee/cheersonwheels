// import { axiosAuth } from "@utils/axios/axiosAuth";
// import { axiosError } from "@utils/axios/axiosError";
// import type { AuthDispatchProps } from "auth-context";
// import { A_AUTH } from "@utils/actions/AuthActions";
// export const fetchRefreshToken = async ({ dispatch, setAccessToken }: AuthDispatchProps) => {
//   // require key variable
//   if (!setAccessToken) throw Error("setAccessToken is required");
//   dispatch({ type: A_AUTH.IS_LOADING, payload: true });
//   try {
//     const { data } = await axiosAuth.post("/auth/refresh-token");
//     setAccessToken(data);
//     dispatch({ type: A_AUTH.IS_LOADING, payload: false });
//   } catch (error) {
//     // cookies could not be verified
//     axiosError({ type: "auth", dispatch, error, target: "refresh-token" });
//   }
// };
