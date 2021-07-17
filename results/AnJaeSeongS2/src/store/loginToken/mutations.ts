import { MutationTree } from 'vuex';
import { LoginToken } from './state';

const mutation: MutationTree<LoginToken> = {
  saveLoginToken(state: LoginToken, nextState: LoginToken) {
    state.accessToken = nextState.accessToken;
    localStorage.setItem('accessToken', state.accessToken);
  },
  clearLoginToken(state: LoginToken) {
    state.accessToken = '';
    localStorage.removeItem('accessToken');
  },
};

export default mutation;
