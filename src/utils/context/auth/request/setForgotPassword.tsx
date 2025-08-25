import { axiosAuth } from '@axios/axiosAuth';
import { A_AUTH } from '@actions/AuthActions';
import { AuthDispatchProps } from 'auth-context';
import { axiosError } from '@axios/axiosError';

export const setForgotPassword = async ({ dispatch, credentials }: AuthDispatchProps) => {
  // require key variable
  if (!credentials) throw Error('credentials is required');
  try {
    dispatch({ type: A_AUTH.IS_LOADING, payload: true });
    const { data } = await axiosAuth.post(`/auth/forgot-password/${credentials.username}`, credentials);
    dispatch({ type: A_AUTH.SET_ACCESS_TOKEN, payload: data });
    dispatch({ type: A_AUTH.IS_LOADING, payload: false });
  } catch (error) {
    axiosError({ target: 'forgotPassword', dispatch, type: 'auth', error });
  }
};
