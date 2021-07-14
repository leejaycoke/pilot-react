<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Pilot Auth Application
        </q-toolbar-title>
        <div>v{{ version }}</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="row items-center justify-evenly mdi-margin q-pa-xl">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'src/store';

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const version = ref(1.0);
    const $store = useStore();
    const $router = useRouter();
    const routeByAccessToken = (accessToken: string) => {
      if (accessToken.length == 0) {
        $router.push('/login').finally(null);
      } else {
        $router.push('/users/me').finally(null);
      }
    }
    $store.watch(state => state.loginToken.accessToken, routeByAccessToken);
    routeByAccessToken($store.state.loginToken.accessToken);
    return {
      version,
    }
  }
})
</script>
