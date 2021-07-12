import { AxiosError, AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useReducer } from 'react';

import Auth from '../utils/auth';

type StateType<T = any> = {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
};

const initialState: StateType = {
  data: null,
  loading: false,
  error: null,
};

type ActionType<T> = {
  type: string;
  data?: T;
  error?: AxiosError;
};

type Reducer<T = any> = (state: StateType<T>, action: ActionType<T>) => StateType<T>;

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        data: null,
        loading: true,
        error: null,
      };
    case 'SUCCESS':
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case 'ERROR':
      return {
        data: null,
        loading: false,
        error: action.error as AxiosError,
      };
    case 'CLEAN_STATE': {
      return initialState;
    }
    default:
      return state;
  }
};

export type AsyncFc<TResult> = (config?: AxiosRequestConfig, ...arg: any) => Promise<TResult>;

const useAsync = <TResult>(callback: AsyncFc<TResult>, callOnMount?: boolean) => {
  const accessToken = Auth.get();

  const [state, dispatch] = useReducer<Reducer<TResult>>(reducer, initialState);

  const run = useCallback(
    async (...args) => {
      dispatch({ type: 'LOADING' });

      const requestConfig = {
        headers: {
          ...(accessToken && {
            Authorization: `Bearer ${accessToken}`,
          }),
        },
      };

      try {
        const data = await callback(requestConfig, ...args);
        setTimeout(() => dispatch({ type: 'SUCCESS', data }), 900);

        return data;
      } catch (error) {
        setTimeout(() => dispatch({ type: 'ERROR', error }), 900);
      }
    },
    [accessToken, callback],
  );

  useEffect(() => {
    callOnMount && run();

    return () => {
      dispatch({ type: 'CLEAN_STATE' });
    };
  }, [callOnMount, run]);

  return { ...state, run };
};

export default useAsync;
