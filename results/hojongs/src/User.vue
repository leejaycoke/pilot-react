<template>
  <div id="user">
    <p>id : {{ id }}</p>
    <p>account : {{ account }}</p>
    <p>name : {{ name }}</p>
    <p>level : {{ level }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// @Component는 Hook을 사용하기 위해 필요
// https://class-component.vuejs.org/guide/class-component.html#hooks
// https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
@Component
export default class Login extends Vue {
  id = "id";
  account = "acc";
  name = "an";
  level = 1;

  mounted() {
    console.log("mounted");
    // https://stackoverflow.com/a/58921237/12956829
    let accessToken = new URL(location.href).searchParams.get("accessToken");

    let base_url = "http://localhost:5000";
    fetch(base_url + "/v1/users/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => response.json())
      .then((response_body) => {
        this.id = response_body.id;
        this.account = response_body.account;
        this.name = response_body.name;
        this.level = response_body.level;
      })
      .catch((err) => console.log(err));
  }
}
</script>

<style>
</style>
