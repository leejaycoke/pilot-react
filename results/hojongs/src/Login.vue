<template>
  <div id="login">
    <form v-on:submit.prevent="login">
      <div>
        <label for="account">Account</label>
        <input id="account" type="text" v-model="account" />
      </div>
      <div>
        <label for="pwd">Password</label>
        <input id="pwd" type="password" v-model="pwd" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Login extends Vue {
  account = "devbadak";
  pwd = "1234";

  login(): void {
    console.log("account = " + this.account);
    console.log("pwd = " + this.pwd);

    let base_url = "http://localhost:5000";
    fetch(base_url + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account: this.account,
        password: this.pwd,
      }),
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
