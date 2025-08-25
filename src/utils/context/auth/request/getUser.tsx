import { A_AUTH } from '@actions/AuthActions';
import { axiosAuth } from '@axios/axiosAuth';
import { AuthDispatchProps } from 'auth-context';

export const getUser = async ({ dispatch, login }: AuthDispatchProps) => {
  try {
    // require key variable
    if (!login) throw Error('user param is required');
    dispatch({ type: A_AUTH.IS_LOADING, payload: true });
    const { data } = await axiosAuth.get(`/auth/user/${login.username}`);
    dispatch({ type: A_AUTH.SET_USER_DATA, payload: data });
    dispatch({ type: A_AUTH.IS_LOADING, payload: false });
  } catch (error) {
    console.log('error :>> ', error);
    // dispatch({ type: A_AUTH.SET_ERROR, payload: error.response.data });
    // dispatch({ type: A_AUTH.IS_LOADING, payload: false });
  }
};
