<template>
  <div class="container">
    <table class="table">
      <tr>
        <th>아이디</th>
        <td>{{ user.account }}</td>
      </tr>
      <tr>
        <th>이름</th>
        <td>{{ user.name }}</td>
      </tr>
      <tr>
        <th>레벨</th>
        <td>{{ user.level }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { fetchMyInfo } from "@/api";
import User from "@/models/User";

export default Vue.extend({
  data() {
    return {
      user: new User(),
    };
  },
  async mounted() {
    try {
      const { data } = await fetchMyInfo();
      this.user = data;
    } catch (error) {
      alert(error);
    }
  },
});
</script>
