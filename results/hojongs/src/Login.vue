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
import { Auth } from "./valueobjects";

// @Component가 없으면 this == null
@Component
export default class Login extends Vue {
  auth = new Auth("devbadak", "1234");

  login(): void {
    console.log("auth = " + this.auth);

    let base_url = "http://localhost:5000";
    fetch(base_url + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.auth),
    })
      .then((response) => response.json())
      .then((response_body) => {
        console.log("token = " + response_body.accessToken);
        // https://stackoverflow.com/a/30481866/12956829
        window.location.href = "/user?accessToken=" + response_body.accessToken;
      })
      .catch((err) => console.log(err));
  }
}
</script>

<style>
</style>
