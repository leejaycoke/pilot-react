<template>
  <div class="container">
    <form @submit.prevent="login">
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">ID</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="account" />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" v-model="password" />
        </div>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary">login</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LoginRequest from "@/models/LoginRequest";
import LoginResponse from "@/models/LoginResponse";

export default Vue.extend({
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const loginRequest: LoginRequest = new LoginRequest(
        this.account,
        this.password
      );
      if (!loginRequest.isValid()) {
        alert("Invalid parameters");
        return;
      }
      try {
        await this.$store.dispatch("LOGIN", loginRequest);
        this.$router.push("/");
      } catch (error) {
        const response = new LoginResponse(error.data);
        alert(response.message);
      }
    },
  },
});
</script>
