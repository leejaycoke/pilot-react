<template>
  <div id="login">
    <form v-on:submit.prevent="login">
      <div>
        <label for="id">ID</label>
        <input id="id" type="text" v-model="id" />
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
  id = "";
  pwd = "";

  login(): void {
    console.log("id = " + this.id);
    console.log("pwd = " + this.pwd);
  }
}
</script>

<style>
</style>
