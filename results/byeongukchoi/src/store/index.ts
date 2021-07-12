import LoginRequest from "@/models/LoginRequest";
import { loginUser, logoutUser } from "@/api";
import Vue from "vue";
import Vuex from "vuex";
import {
  saveAccessTokenToCookie,
  getAccessTokenFromCookie,
  deleteAccessTokenFromCookie,
} from "../utils/cookies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: "" as string,
  },
  getters: {
    isLoggedIn: (state) => (): boolean => {
      return !!state.accessToken || !!getAccessTokenFromCookie();
    },
    accessToken(state): string {
      return state.accessToken || getAccessTokenFromCookie();
    },
  },
  mutations: {
    SET_ACCESS_TOKEN(state, accessToken: string) {
      state.accessToken = accessToken || getAccessTokenFromCookie();
    },
    LOGOUT(state) {
      state.accessToken = "";
    },
  },
  actions: {
    async LOGIN({ commit }, loginRequest: LoginRequest) {
      const { data } = await loginUser(loginRequest);
      commit("SET_ACCESS_TOKEN", data.accessToken);
      saveAccessTokenToCookie(data.accessToken);
    },
    async LOGOUT({ commit }) {
      await logoutUser();
      deleteAccessTokenFromCookie();
      commit("LOGOUT");
    },
  },
  modules: {},
});
