<template>
  <q-page class="row items-center justify-evenly">
    <login v-if="!logon"/>
    <info v-if="logon"/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import login from "pages/Login.vue";
import info from "pages/users/Info.vue";

export default defineComponent({
  name: 'PageIndex',
  components: { login, info },
  setup() {
    const logon = ref(false);
    return {
      logon
    };
  }
});
</script>
