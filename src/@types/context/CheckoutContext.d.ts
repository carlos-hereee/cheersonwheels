declare module "checkout-context" {
  import { CartProps, MerchProps, OrderSchema } from "store-context";
  import { FORM_STATUS } from "app-admin";
  import { A_CHECKOUT } from "@utils/actions/CheckoutActions";

  export interface CheckoutValues {
    cart: CartProps[];
    store: StoreProps;
    merch: MerchProps;
  }
  export interface CheckoutStateProps {
    isLoading: boolean;
    cart: CartProps[];
    merch: MerchProps;
    order?: OrderSchema;
    error: string;
  }
  export interface CheckoutSchema extends CheckoutStateProps {
    addToCart: (data: CheckoutValues) => void;
    updateCart: (data: CartProps[]) => void;
    setLoading: (data: boolean) => void;
    setMerch: (data: MerchProps) => void;
    setOrder: (data?: OrderSchema) => void;
  }
  export interface CheckoutDispatchProps {
    dispatch: React.Dispatch<CheckoutActionProps>;
    cart?: CartProps[];
    store?: StoreProps;
    merch?: MerchProps;
  }
  export type CheckoutActionProps =
    | { type: A_CHECKOUT.IS_LOADING; payload: boolean }
    | { type: A_CHECKOUT.SET_ERROR; payload: string }
    | { type: A_CHECKOUT.SET_REQUEST_STATUS; payload: FORM_STATUS }
    | { type: A_CHECKOUT.SET_MERCH; payload: MerchProps }
    | { type: A_CHECKOUT.SET_ORDER; payload: OrderSchema | undefined }
    | { type: A_CHECKOUT.UPDATE_CART; payload: CartProps[] };
}
