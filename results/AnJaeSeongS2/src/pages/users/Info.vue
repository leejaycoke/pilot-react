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
<!--  <q-card class="my-card" flat bordered>-->
<!--    <q-card-section horizontal>-->
<!--      <q-card-section>-->
<!--        <div class="text-h6">account:<br> {{ user.account }}</div>-->
<!--        <div class="text-subtitle2">name:<br> {{ user.name }}</div>-->
<!--        <div class="text-subtitle2">level:<br> {{ user.level }}</div>-->
<!--        <div class="text-subtitle2">id:<br> {{ user.id }}</div>-->
<!--      </q-card-section>-->
<!--      <q-img-->
<!--        class="col-10"-->
<!--        src="https://cdn.quasar.dev/img/parallax2.jpg"-->
<!--      />-->
<!--    </q-card-section>-->
<!--  </q-card>-->
<!--  <q-card class="my-card">-->
<!--    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">-->
<!--      <div class="absolute-bottom">-->
<!--        <div class="text-h6">{{ user.account }}</div>-->
<!--        <div class="text-subtitle2">by {{ user.name }}</div>-->
<!--      </div>-->
<!--    </q-img>-->

<!--    <q-card-actions>-->
<!--      <q-text flat>Action 1</q-text>-->
<!--      <q-text flat>Action 2</q-text>-->
<!--    </q-card-actions>-->
<!--  </q-card>-->
</template>

<script lang="ts">
import {defineComponent, ref, Ref} from "vue";
import {User} from "../../components/models";
import infoItem from './InfoItem.vue';

export default defineComponent({
  name: "info",
  components: { infoItem },
  setup() {
    const user: Ref<User> = ref<User>({
      account: 'adsf',
      id: 1,
      name: 'asdfgs',
      level: 2
    });
    user.value.name = 'test';
    return {
      user,
    };
  }
});
</script>

<style scoped>

</style>
