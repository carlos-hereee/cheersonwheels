import { A_AUTH } from '@actions/AuthActions';
import { AuthDispatchProps } from 'auth-context';

export const updateDumnyData = async ({ dispatch, login }: AuthDispatchProps) => {
  // require key variable
  if (!login) throw Error('login is required');
  dispatch({ type: A_AUTH.IS_LOADING, payload: true });
  dispatch({ type: A_AUTH.SET_DUMMY_DATA, payload: login });
  dispatch({ type: A_AUTH.IS_LOADING, payload: false });
};
