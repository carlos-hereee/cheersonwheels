/* eslint-disable no-unused-vars */
declare module "app-context" {
  import type { A_APP } from "@utils/actions/AppActions";
  import { Boards } from "task-board-context";
  import { Post } from "media-context";
  import { IEvent } from "app-calendar";
  import { MerchProps } from "store-context";
  import { ISubscription, UserSchema } from "auth-context";
  import { AppAssets, FORM_STATUS } from "app-admin";
  import {
    AdminIdProps,
    AppListProps,
    AppProps,
    CalendarProps,
    ContactApp,
    MediaItemProp,
    MediaProps,
    MenuProp,
    Message,
    NewsletterProps,
    Notification,
    PageProps,
    StoreProps,
    Subcription,
    SubcriptionProp,
    ThemeList,
    UserData,
  } from "app-types";

  export interface AppCardProps {
    app: AppListProps;
    theme?: string;
    errorMessage?: string;
  }

  export interface StripeUpdateConfigProps {
    readPrivacyPolicy?: boolean;
    currency?: string;
  }
  export interface MapState {
    dimensions: MapDimensions;
    name: string;
    grid?: GridData[][];
  }
  export interface IMaps {
    name?: string;
    uid: string;
    dimensions: MapDimensions;
    map: GridData[][];
  }
  export interface GridData {
    id: string;
    data: string;
    roomType: string;
    name?: string;
    orientation?: string;
    x: number;
    y: number;
  }
  export interface MapDimensions {
    width: number;
    length: number;
    name?: string;
    unit?: "cm" | "m" | "km";
  }
  export interface AppMap {
    map?: GridData[][];
    appId?: string;
    name?: string;
    dimensions?: MapDimensions;
    iMap?: IMaps;
  }

  export interface AppStateProps {
    // auth schema
    isLoading: boolean;
    loadingState: { isLoadingInventory: boolean };
    isOnline: boolean;
    requestStatus: FORM_STATUS;

    appList: AppListProps[];
    themeList: ThemeList[];
    iconList: IconListItem[];
    appError: string;
    redirectUrl: string;
    appMessage?: string;
    appName: string;
    email: string;
    activeAppName: string;
    welcomeMessage: string;
    landing?: PageProps;
    appId: string;
    appUrl: string;
    appLink: string;
    activeAppId: string;
    owner: UserSchema;
    appUsers: UserSchema[];
    adminIds: AdminIdProps[];
    notifications: Notification[];
    newsletter: NewsletterProps;
    pages: PageProps[] | [];
    page: PageProps;
    taskBoard: Boards;
    taskBoards: Boards[];
    activePage: PageProps;
    media: MediaProps;
    socialMedia: MediaItemProp;
    activeMedia: MediaProps;
    menu: MenuProp[];
    activeMenu: MenuProp[];
    logo: string;
    activeLogo: string;
    languageList: MenuProp[];
    locale: string;
    dbVersion?: string;
    calendar: CalendarProps;
    store: StoreProps;
    platformTiers: ISubscription[];
    maps: IMaps[];
    posts: Post[];
    inventory: MerchProps[];
    subscriptionTiers: ISubscription[];
    messages: Message[];
  }
  // app context schema
  export interface AppSchema extends AppStateProps {
    updateAppData: (props: AppAssets) => void;
    // updateStripeConfig: (config: StripeConfig) => void;
    getAppWithName: (appName: string, setAsActive?: boolean) => void;
    getPlatformData: () => void;
    setAppLoading: (isLoading: boolean) => void;
    setActivePage: (page: PageProps) => void;
    setSocialMedia: (media: MediaItemProp) => void;
    getStoreInventory: (storeId: string) => void;
    getStripeAccountLink: (appId: string) => void;
    signUpWithStripe: (appId: string) => void;
    clearNotification: ({ appId: string, id: string }) => void;
    getPageWithId: (appName: string) => void;
    upgradeToLatest: (appId: string) => void;
    setAppMessage: (appId: string) => void;
    getAppUsers: (appId: string) => void;
    setRequestStatus: (status: FORM_STATUS) => void;
    createSubscription: (appId: SubcriptionProp) => void;
    updateSubscription: (appId: SubcriptionProp) => void;
    deleteSubscription: (appId: SubcriptionProp) => void;

    contactApp: (props: ContactApp) => void;
    createMap: (props: AppMap) => void;
    updateMap: (props: AppMap) => void;
    // createTaskBoard: (props: TaskBoardValues) => void;
    // editTaskBoard: (props: TaskBoardValues) => void;
    // getTaskBoard: (props: TaskBoardValues) => void;
    // getBoardWithBoardId: (props: TaskBoardValues) => void;
    // getAllTaskBoard: (props: TaskBoardValues) => void;
    // removeTaskFromList: (props: TaskBoardValues) => void;
    // addBoardListTask: (props: TaskBoardValues) => void;
    // addCommentTask: (props: TaskBoardValues) => void;
    // replyToComment: (props: TaskBoardValues) => void;
    // setActiveBoard: (props: Boards) => void;
    // setTaskBoard: (props: TaskBoardValues) => void;
    // taskBoardInvitation: (props: TaskBoardValues) => void;
    // assignMemberToTask: (props: TaskBoardValues) => void;
  }

  export interface AppDispatchProps {
    dispatch: React.Dispatch<AppActionProps>;
    app?: AppProps;
    iMap?: IMaps;
    status?: string;
    board?: Boards;
    page?: PageProps;
    store?: StoreProps;
    dimensions?: MapDimensions;
    map?: GridData[][];
    calendar?: CalendarProps;
    appList?: AppListProps[];
    platformTiers?: ISubscription[];
    logo?: string;
    event?: IEvent;
    id?: string;
    listId?: string;
    messageId?: string;
    reply?: { star?: number; data: string };
    taskId?: string;
    name?: string;
    userId?: string;
    media?: MediaProps;
    message?: { [x: string]: string };
    values?: { [x: string]: string };
    user?: UserData | UserSchema;
    appName?: string;
    pageId?: string;
    config?: StripeUpdateConfigProps;
    subscription?: Subcription;
    themeList?: ThemeList[];
    storeId?: string;
    isLoading?: boolean;
    setAsActive?: boolean;
    appId?: string;
    menu?: MenuProp[];
    updateAppData?: (a: AppProps) => void;
    updateUser?: (a: UserSchema) => void;
  }

  export type AppActionProps =
    | { type: A_APP.IS_LOADING | A_APP.COOMING_SOON; payload: boolean }
    | { type: A_APP.SET_LOADING_STATE; payload: { [key: string]: boolean } }
    | { type: A_APP.SET_REQUEST_STATUS; payload: FORM_STATUS }
    | {
        type:
          | A_APP.SET_APP_ID
          | A_APP.SET_APP_URL
          | A_APP.SET_APP_LINK
          | A_APP.SET_ACTIVE_APP_ID
          | A_APP.SET_APP_LOGO
          | A_APP.SET_ACTIVE_LOGO
          | A_APP.SET_APP_NAME
          | A_APP.SET_APP_ERROR
          | A_APP.SET_LOCALE
          | A_APP.SET_DB_VERSION
          | A_APP.SET_APP_MESSAGE
          | A_APP.SET_ACTIVE_APP_NAME
          | A_APP.SET_REDIRECT_URL;
        payload: string;
      }
    | { type: A_APP.SET_THEME_LIST; payload: ThemeList[] }
    | { type: A_APP.SET_APP_MAPS; payload: IMaps[] }
    | { type: A_APP.SET_LANGUAGES; payload: MenuProp[] }
    | { type: A_APP.SET_STRIPE_CONFIG; payload: StripeConfig }
    | { type: A_APP.SET_OWNER; payload: UserSchema }
    | { type: A_APP.SET_APP_USERS; payload: UserSchema[] }
    | { type: A_APP.SET_STORE_INVENTORY; payload: MerchProps[] }
    | { type: A_APP.SET_APP_TASKS; payload: Boards }
    | { type: A_APP.SET_APP_BOARD_TASKS; payload: Boards[] }
    | { type: A_APP.SET_APP_POSTS; payload: Posts[] }
    | { type: A_APP.SET_ACTIVE_MENU | A_APP.SET_MENU; payload: MenuProp[] }
    | { type: A_APP.SET_LANDING | A_APP.SET_ACTIVE_PAGE | A_APP.SET_PAGE; payload: PageProps }
    | { type: A_APP.SET_PAGES; payload: PageProps[] }
    | { type: A_APP.SET_APP_MESSAGES; payload: Message[] }
    | { type: A_APP.SET_STORE; payload: StoreProps }
    | { type: A_APP.SET_CALENDAR; payload: CalendarProps }
    | { type: A_APP.SET_APP_LIST; payload: AppListProps[] }
    | { type: A_APP.SET_APP_SUBSCRIPTIONS | A_APP.SET_PLATFORM_TIERS; payload: ISubscription[] }
    | { type: A_APP.SET_NEWSLETTER; payload: NewsletterProps }
    | { type: A_APP.SET_MEDIA | A_APP.SET_ACTIVE_MEDIA; payload: MediaProps }
    | { type: A_APP.SET_NOTIFICATIONS; payload: Notification[] }
    | { type: A_APP.SET_MEDIA_ITEM; payload: MediaItemProp }
    | { type: A_APP.SET_ADMIN_IDS; payload: AdminIdProps[] };
}
