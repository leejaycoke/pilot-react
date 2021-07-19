<template>
  <div id="user">
    <p>id : {{ user.id }}</p>
    <p>account : {{ user.account }}</p>
    <p>name : {{ user.name }}</p>
    <p>level : {{ user.level }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ApiService from "@/service/api_service";
import UrlParamService from "@/service/url_param_service";
import User from "@/dto/user";

let apiService = new ApiService();
let urlParamService = new UrlParamService();

// @Component는 Hook을 사용하기 위해 필요
// https://class-component.vuejs.org/guide/class-component.html#hooks
// https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
@Component
export default class Login extends Vue {
  user = new User(1, "", "", 0);

  mounted(): void {
    this.updateUser();
  }

  /**
   * Call user API and update user data
   */
  updateUser(): void {
    let accessToken = urlParamService.getAccessTokenOrThrow();
    apiService.getUser(accessToken).then((user) => {
      this.user = user;
    });
  }
}
</script>

<style>
</style>
