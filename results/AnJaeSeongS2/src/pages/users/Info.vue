<template>
  <q-card class="my-card">
    <img src="https://cdn.quasar.dev/img/parallax2.jpg">
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
import { User } from '../../components/models';
import infoItem from './InfoItem.vue';
import { api } from 'boot/axios';
import { AxiosResponse } from 'axios';

export default defineComponent({
  name: 'info',
  components: { infoItem },
  setup() {
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
      return;
    }
    api.get('v1/users/me', {
      headers: {
        Authorization: `Bearer ${loginToken.value.accessToken}`,
      }
    }).then((res: AxiosResponse<User>) => {
      console.debug(res);
      user.value = res.data;
    }).catch(reason => {
      console.log('failed to load user info.');
      console.debug(reason);
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
