import { axiosAuth } from '@axios/axiosAuth';

import { AuthDispatchProps } from 'auth-context';
import { axiosError } from '@axios/axiosError';
import { A_AUTH } from '@actions/AuthActions';

export const singUp = async ({ dispatch, credentials }: AuthDispatchProps) => {
  try {
    dispatch({ type: A_AUTH.IS_LOADING, payload: true });
    const { data } = await axiosAuth.post('/auth/register', credentials);
    dispatch({ type: A_AUTH.SET_ACCESS_TOKEN, payload: data });
  } catch (error) {
    axiosError({ dispatch, error, type: 'auth', target: 'login' });
  }
};
