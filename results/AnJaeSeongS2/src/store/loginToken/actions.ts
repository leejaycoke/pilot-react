import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { LoginToken } from './state';

const actions: ActionTree<LoginToken, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default actions;
