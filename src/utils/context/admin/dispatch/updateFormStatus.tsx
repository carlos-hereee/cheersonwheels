import { A_ADMIN } from "@utils/actions/AdminActions";
import type { AdminDisptachProps } from "app-admin";

export const updateFormStatus = async ({ dispatch, status }: AdminDisptachProps) => {
  // require key variable
  if (!status) throw Error("status is required");
  dispatch({ type: A_ADMIN.SET_FORM_STATUS, payload: status });
};
