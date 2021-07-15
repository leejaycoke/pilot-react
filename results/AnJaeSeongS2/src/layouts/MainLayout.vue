<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Pilot Auth Application
        </q-toolbar-title>
        <q-btn v-if="isRenderLogoutBtn" @click="logout" class="q-mr-sm" color="dark">Logout</q-btn>
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
import { computed, defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { useStore } from 'src/store';

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const version = ref(1.0);
    const $q = useQuasar();
    const $store = useStore();
    const $router = useRouter();
    const isRenderLogoutBtn = computed(() => $store.state.loginToken.accessToken);
    const routeByAccessToken = (accessToken: string) => {
      if (accessToken.length == 0) {
        $router.push('/login').finally(null);
      } else {
        $router.push('/users/me').finally(null);
      }
    }
    $store.watch(state => state.loginToken.accessToken, routeByAccessToken);
    // routeByAccessToken($store.state.loginToken.accessToken);
    const logout = () => {
      $store.commit('loginToken/clearLoginToken');
      $router.push('/login').then(() => {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: '정상적으로 로그아웃 했습니다.',
        });
      }).finally(null);
    }
    return {
      version,
      isRenderLogoutBtn,
      logout,
    }
  }
})
</script>
