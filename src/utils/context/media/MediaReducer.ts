import { A_MEDIA } from "@utils/actions/MediaActions";
import type { MediaActionProps, MediaState } from "media-context";

export const reducer = (state: MediaState, action: MediaActionProps): MediaState => {
  switch (action.type) {
    case A_MEDIA.IS_LOADING:
      return { ...state, isLoading: action.payload };
    case A_MEDIA.SET_ERROR:
      return { ...state, error: action.payload };
    case A_MEDIA.SET_POST:
      return { ...state, post: action.payload };
    case A_MEDIA.SET_REQUEST_STATUS:
      return { ...state, requestStatus: action.payload };
    case A_MEDIA.SET_POSTS:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};
