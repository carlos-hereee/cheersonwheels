import { MEDIA_AUTH } from '@actions/MediaActions';
import { axiosMedia } from '@axios/axiosMedia';
import { MediaDispatchProps } from 'media-context';

export const createPost = async ({ dispatch, post, appId }: MediaDispatchProps) => {
  try {
    await axiosMedia.post(`/post/create/${appId}`, post);
    dispatch({ type: MEDIA_AUTH.SET_REQUEST_STATUS, payload: 'SUCCESS' });
  } catch (error) {
    dispatch({ type: MEDIA_AUTH.SET_ERROR, payload: 'uanble to create post' });
  }
};
