<template>
  <q-page class="row items-center justify-evenly">
    <login/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Login from "pages/Login.vue";

export default defineComponent({
  name: 'PageIndex',
  components: { Login },
});
</script>
