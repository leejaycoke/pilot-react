<template>
  <q-item>
    <q-item-section avatar>
      <q-icon v-bind:color="colorName" v-bind:name="iconName" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ textLabel }}</q-item-label>
      <q-item-label caption>{{ textBody }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "infoItem",
  props: {
    iconName: {
      type: String,
      required: true,
    },
    colorName: {
      type: String,
      required: true,
    },
    textLabel: {
      type: String,
      required: true,
    },
    textBody: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    console.log('adsfadfafad');
    console.log(props);
  }
});
</script>

<style scoped>

</style>
