<template>
  <div>
    <button class="btn btn-primary" @click="logout">로그아웃</button>
    <Profile />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Profile from "@/components/Profile.vue";

export default Vue.extend({
  components: {
    Profile,
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LOGOUT");
      this.$router.push("/login");
    },
  },
});
</script>
