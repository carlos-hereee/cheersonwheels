import { MEDIA_AUTH } from '@actions/MediaActions';
import { MediaActionProps, MediaState } from 'media-context';

export const reducer = (state: MediaState, action: MediaActionProps): MediaState => {
  switch (action.type) {
    case MEDIA_AUTH.IS_LOADING:
      return { ...state, isLoading: action.payload };
    case MEDIA_AUTH.SET_ERROR:
      return { ...state, error: action.payload };
    case MEDIA_AUTH.SET_POST:
      return { ...state, post: action.payload };
    case MEDIA_AUTH.SET_REQUEST_STATUS:
      return { ...state, requestStatus: action.payload };
    case MEDIA_AUTH.SET_POSTS:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};
