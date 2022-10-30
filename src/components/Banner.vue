<template>
  <v-banner color="deep-purple-accent-4" v-if="visible">
    <v-banner-text>
      <h1>Welcome to Astro 👋</h1>

      This dashboard has been built using 3 different frameworks (Vue, React and
      Svelte), on top of Astro of course. You can preview which component
      belongs to a specific framework by clicking on the 👁 button located at the
      bottom of the page!
    </v-banner-text>

    <v-banner-actions>
      <v-btn @click="hide">Hide</v-btn>
    </v-banner-actions>
  </v-banner>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(true);

function hide() {
  visible.value = false;
}
</script>
