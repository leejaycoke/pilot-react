<!-- not used -->
<template>
  <login v-if="loginToken.accessToken.length == 0"/>
  <info v-if="loginToken.accessToken.length > 0"/>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'src/store';
import login from 'pages/Login.vue';
import info from 'pages/users/Info.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {login, info},
  setup() {
    const $store = useStore();
    const loginToken = computed(() => $store.state.loginToken);
    return {
      loginToken,
    };
  },
});
</script>
