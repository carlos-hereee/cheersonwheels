import { A_STORE } from "@utils/actions/StoreActions";
import type { ServiceActionProps as ActionProps, StoreStateProps as StateProps } from "store-context";

export const reducer = (state: StateProps, action: ActionProps): StateProps => {
  switch (action.type) {
    case A_STORE.IS_LOADING:
      return { ...state, isLoading: action.payload };
    case A_STORE.UPDATE_CART:
      return { ...state, cart: action.payload };
    case A_STORE.SET_MERCH:
      return { ...state, merch: action.payload };
    case A_STORE.SET_STRIPE_SECRET:
      return { ...state, stripeSecret: action.payload };
    case A_STORE.SET_ERROR:
      return { ...state, error: action.payload };
    case A_STORE.SET_TRACK_ORDER:
      return { ...state, trackOrder: action.payload };
    case A_STORE.SET_STRIPE_CONFIRMATION:
      return { ...state, stripeConfirmation: action.payload };
    case A_STORE.SET_STRIPE_BALANCE:
      return { ...state, stripeBalance: action.payload };
    case A_STORE.SET_STRIPE_CONFIG:
      return { ...state, stripeConfig: action.payload };
    case A_STORE.SET_STORE_ORDER:
      return { ...state, order: action.payload };
    // case "UPDATE_BOOKABLE":
    //   return { ...state, isLoading: false, bookable: action.payload };
    // case "UPDATE_BOOKED":
    //   return { ...state, isLoading: false, booked: action.payload };
    // case "UPDATE_ACTIVE":
    //   return { ...state, isLoading: false, active: action.payload };
    // case "UPDATE_SERVICES":
    //   return { ...state, isLoading: false, services: action.payload };
    // case "BOOK_EVENT":
    //   return { ...state, isLoading: false, cart: action.payload };
    // // case "BOOK_REQUIRED":
    // //   return bookRequired(state, action);
    // // case "UPDATE_ITEM_QUANTITY":
    // //   return updateItemQuantity(state, action);
    // case "SET_IS_USER_REQ":
    //   return { ...state, isLoading: false, isUserReq: action.payload };
    // case "SET_TOTAL":
    //   return { ...state, isLoading: false, total: action.payload };
    default:
      return state;
  }
};
// const bookRequired = (state, action) => {
//   return {
//     ...state,
//     isLoading: false,
//     cart: state.cart.map((c, idx) => (idx === action.payload.idx ? action.payload.data : c)),
//   };
// };
// const updateItemQuantity = (state, action) => {
//   return {
//     ...state,
//     isLoading: false,
//     cart: state.cart.map((c) => (c.uid === action.payload.uid ? action.payload : c)),
//   };
// };
// type ReducerProps = (state: StoreStateProps, action: ServiceActionProps) => void;
