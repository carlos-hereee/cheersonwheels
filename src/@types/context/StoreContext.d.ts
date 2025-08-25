/* eslint-disable no-unused-vars */
declare module "store-context" {
  import { Message, StoreProps } from "app-types";
  import type { UserSchema } from "auth-context";
  import { A_STORE } from "@utils/actions/StoreActions";

  export interface ViewOrderStatusKey {
    pending: DialogStatusProps;
    incomplete: DialogStatusProps;
    complete: DialogStatusProps;
    accepted: DialogStatusProps;
  }
  export interface StripeBalance {
    available?: { amount: number; currency: string; source_type: { card: number } }[];
    pending?: { amount: number; currency: string; source_type: { card: number } }[];
  }
  export interface MerchProps {
    cost: number;
    inStock: number;
    quantity: number;
    storeId: string;
    merchId: string;
    priceId: string;
    productId: string;
    name: string;
    body: string;
    hero: string;
    catalog: string[];
    reviews: Message[];
    uid: string;
    thumbnail?: string;
  }
  export interface OrderStoreInfo {
    storeId: string;
    email: string;
    location: string;
    location2?: string;
  }
  export interface OrderMerchSchema {
    merchId: string;
    name?: string;
    cost?: number;
    thumbnail?: string;
    paymentStatus?: string;
    productId?: string;
    quantity?: number;
    priceId?: string;
    paymentStatus?: "paid" | "unpaid" | "no_payment_required";
    quantity: number;
  }
  export interface ClientSchema {
    email: string;
    name?: string;
    phone: string;
    userId?: string;
    address?: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    };
  }

  export interface OrderSchema {
    store: OrderStoreInfo;
    status: "pending" | "completed" | "accepted" | "declined";
    client: ClientSchema;
    paymentMethod: "in-store" | "stripe";
    orderId: string;
    merch: OrderMerchSchema[];
  }
  export type OrderOptions = "decline" | "completed" | "accepted" | "incomplete" | "pending";
  export interface OrderDetailsProps {
    order: OrderSchema;
    labels?: { accepted?: string; decline?: string; completed?: string };
    onClick?: (option: OrderOptions) => void;
  }

  export interface PaymentMethod {
    uid: string;
    type: "visa/credit" | "store" | "paypal";
    name: string;
    icon: string;
    hero?: { url: string; small: string; name: string; alt: string };
  }
  export interface StripeConfig {
    currency?: string;
    charges_enabled?: string;
    readPrivacyPolicy?: boolean;
    settings: {
      payouts: { schedule: { delay_days: number; interval: string } };
    };
  }
  export interface StripeConfirmationProps {
    status: string;
    paymentStatus: string;
    customer: string;
    mode: string;
    subscription: string;
    metadata?: { [key: string]: string };
    intent: string;
    customerDetails: {
      email: string;
      name: string;
      phone: string;
    };
  }

  export interface StoreStateProps {
    isLoading: boolean;
    stripeSecret: string;
    trackOrder?: OrderSchema;
    stripeConfig?: StripeConfig;
    error: string;
    location: string;
    location2: string;
    stripeConfirmation: StripeConfirmationProps;
    stripeBalance?: StripeBalance;
    order?: OrderSchema;
    merch?: MerchProps;
    cart: CartProps[];
  }
  export interface CartProps extends StoreProps {
    location?: string;
    location2?: string;
    merch: MerchProps[];
  }
  export interface SubmitPaymentProps {
    user?: UserSchema;
    payment?: { [key: string]: string };
    cart?: CartProps[];
  }
  export interface PayoutAmmount {
    data: string;
    appId: string;
    amount: string;
  }
  export interface PostReview {
    merchId?: string;
    messageId?: string;
    posts?: Message[];
    messages?: Message[];
    merch?: MerchProps;
    data: { [d: string]: string | number };
  }
  export interface StoreCheckout {
    sessionCart: CartProps;
    user: UserSchema;

    merchandise?: MerchProps[];
  }
  export interface CheckoutIntent {
    sessionId: string;
  }
  export interface TrackOrder {
    orderId: string;
    accountId: string;
  }
  export interface StoreOrderUpdate {
    order: OrderSchema;
    option: OrderOptions;
    appId: string;
    from?: OrderOptions;
  }
  export interface StoreSchema extends StoreStateProps {
    submitOrder: (cart: CartProps[]) => void;
    onCheckOutSession: (cart: StoreCheckout) => void;
    onStoreCheckout: (data: StoreCheckout) => void;
    confirmIntent: (sessionId: CheckoutIntent) => void;
    manageBilling: (sessionId: string) => void;
    orderTracker: (orderId: TrackOrder) => void;
    setLoading: (state: boolean) => void;
    setTrackOrder: (state?: OrderSchema) => void;
    getBalance: (appId: string) => void;
    handlePayouts: (data: PayoutAmmount) => void;
    getMerch: (merchId: string) => void;
    getAccount: (appId: string) => void;
    postReview: (data: PostReview) => void;
    replyReviewMessage: (data: PostReview) => void;
  }
  export interface StoreDispatchProps {
    dispatch: React.Dispatch<ServiceActionProps>;
    merch?: MerchProps;
    merchandise?: MerchProps[];
    user?: UserSchema;
    sessionId?: string;
    orderId?: string;
    accountId?: string;
    storeId?: string;
    messageId?: string;
    posts?: Message[];
    messages?: Message[];
    merchId?: string;
    data?: { [x: string]: string | number } | string;
    appId?: string;
    // data?: string;
    amount?: string;
    option?: OrderOptions;
    order?: OrderSchema;
    store?: StoreProps;
    payment?: { [key: string]: string };
    cart?: CartProps[];
    sessionCart?: CartProps;
  }
  export type ServiceActionProps =
    | { type: A_STORE.IS_LOADING; payload: boolean }
    | { type: A_STORE.SET_STRIPE_CONFIRMATION; payload: StripeConfirmationProps }
    | { type: A_STORE.SET_STRIPE_SECRET | A_STORE.SET_ERROR; payload: string }
    | { type: A_STORE.SET_STORE_ORDER; payload: OrderSchema | undefined }
    | { type: A_STORE.SET_STRIPE_BALANCE; payload: StripeBalance }
    | { type: A_STORE.SET_TRACK_ORDER; payload: OrderSchema | undefined }
    | { type: A_STORE.SET_MERCH; payload: MerchProps | undefined }
    | { type: A_STORE.SET_STRIPE_CONFIG; payload: StripeConfig }
    | {
        type: A_STORE.ADD_TO_CART | A_STORE.REMOVE_FROM_CART | A_STORE.UPDATE_CART;
        payload: CartProps[];
      };
}
