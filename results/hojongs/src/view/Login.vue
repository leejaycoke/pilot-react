<template>
  <div id="login">
    <form v-on:submit.prevent="login">
      <div>
        <label for="account">Account</label>
        <input id="account" type="text" v-model="auth.account" />
      </div>
      <div>
        <label for="pwd">Password</label>
        <input id="pwd" type="password" v-model="auth.password" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Auth from "@/dto/auth";
import ApiService from "@/service/ApiService";

let apiService = new ApiService();

// @Component가 없으면 this == null
@Component
export default class Login extends Vue {
  auth = new Auth("devbadak", "1234");

  /**
   * Call login API and redirect to /user page
   */
  login(): void {
    apiService.login(this.auth).then((accessToken) => {
      window.location.href = `/user?accessToken=${accessToken}`;
    });
  }
}
</script>

<style>
</style>
