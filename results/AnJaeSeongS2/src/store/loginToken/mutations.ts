import { MutationTree } from 'vuex';
import { LoginToken } from './state';

const mutation: MutationTree<LoginToken> = {
  saveLoginToken (state: LoginToken, nextState: LoginToken) {
    state.accessToken = nextState.accessToken;
  },
  clearLoginToken (state: LoginToken) {
    state.accessToken = '';
  },
};

export default mutation;
