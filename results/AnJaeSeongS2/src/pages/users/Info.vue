<template>
  <q-card class="my-card">
<!--    <img src="https://cdn.quasar.dev/img/parallax2.jpg">-->
    <q-list>
      <infoItem colorName="primary" iconName="far fa-address-card" textLabel="계정" v-bind:textBody="user.account"/>
      <infoItem colorName="secondary" iconName="far fa-smile" textLabel="이름" v-bind:textBody="user.name"/>
      <infoItem colorName="accent" iconName="fas fa-level-up-alt" textLabel="등급" v-bind:textBody="user.level"/>
      <infoItem colorName="dark" iconName="far fa-id-badge" textLabel="식별자" v-bind:textBody="user.id"/>
    </q-list>
  </q-card>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'src/store';
import { User, Error } from '../../components/models';
import infoItem from './InfoItem.vue';
import { api } from 'boot/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'info',
  components: { infoItem },
  setup() {
    const $q = useQuasar();
    const $store = useStore();
    const $router = useRouter();
    const user: Ref<User> = ref<User>({
      account: 'not initialized',
      id: 0,
      name: 'not initialized',
      level: 0,
    });
    const loginToken = computed(() => $store.state.loginToken);
    if (loginToken.value.accessToken.length == 0) {
      $router.push('/login').finally(null);
    }
    api.get('v1/users/me', {
      headers: {
        Authorization: `Bearer ${loginToken.value.accessToken}`,
      }
    }).then((res: AxiosResponse<User>) => {
      user.value = res.data;
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: `[${user.value.name}]님, 방문을 환영합니다.`,
      });
    }).catch((reason: AxiosError<Error>) => {
      let message = '알 수 없는 이유로 인해 유저 정보를 가져올 수 없습니다.';
      if (reason.isAxiosError) {
        message = reason.response?.data.message as string;
      }
      $q.notify({
        color: 'red-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: message,
      });
      console.debug(reason);
      $store.commit('loginToken/clearLoginToken');
      $router.push('/login').finally(null);
    });
    return {
      user,
      loginToken,
    };
  }
});
</script>

<style scoped>

</style>
