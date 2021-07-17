import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { LoginToken } from './state';

const getters: GetterTree<LoginToken, StateInterface> = {
  someGetter(/* context */) {
    // your code
  },
};

export default getters;
