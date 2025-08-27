import { A_ADMIN } from "@utils/actions/AdminActions";
import type { AdminActionProps, AdminStateProps } from "app-admin";

export const reducer = (state: AdminStateProps, action: AdminActionProps): AdminStateProps => {
  switch (action.type) {
    case A_ADMIN.IS_LOADING:
      return { ...state, isLoading: action.payload };
    case A_ADMIN.SET_FORM_STATUS:
      return { ...state, formStatus: action.payload };
    case A_ADMIN.SET_WEBHOOKS:
      return { ...state, webhooks: action.payload };
    case A_ADMIN.SET_FORM_ERRORS:
      return { ...state, formErrors: { ...state.formErrors, ...action.payload } };
    default:
      return state;
  }
};
