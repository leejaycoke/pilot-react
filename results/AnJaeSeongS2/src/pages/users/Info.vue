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
import {defineComponent, ref, Ref} from 'vue';
import {User} from '../../components/models';
import infoItem from './InfoItem.vue';

export default defineComponent({
  name: 'info',
  components: { infoItem },
  setup() {
    const user: Ref<User> = ref<User>({
      account: '',
      id: 0,
      name: '',
      level: 0,
    });
    return {
      user,
    };
  }
});
</script>

<style scoped>

</style>
