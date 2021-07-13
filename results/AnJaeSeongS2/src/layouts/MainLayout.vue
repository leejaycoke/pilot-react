<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
<!--        <q-btn-->
<!--          flat-->
<!--          dense-->
<!--          round-->
<!--          icon="menu"-->
<!--          aria-label="Menu"-->
<!--          @click="toggleLeftDrawer"-->
<!--        />-->

        <q-toolbar-title>
          Pilot Auth Application
        </q-toolbar-title>

        <div>v{{ version }}</div>
      </q-toolbar>
    </q-header>

<!--    <q-drawer-->
<!--      v-model="leftDrawerOpen"-->
<!--      show-if-above-->
<!--      bordered-->
<!--      class="bg-grey-1"-->
<!--    >-->
<!--      <q-list>-->
<!--        <q-item-label-->
<!--          header-->
<!--          class="text-grey-8"-->
<!--        >-->
<!--          Nothing yet.-->
<!--        </q-item-label>-->
<!--      </q-list>-->
<!--    </q-drawer>-->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    // const leftDrawerOpen = ref(false)
    const version = ref(1.0)

    return {
      // leftDrawerOpen,
      version,
      // toggleLeftDrawer () {
      //   leftDrawerOpen.value = !leftDrawerOpen.value
      // }
    }
  }
})
</script>
