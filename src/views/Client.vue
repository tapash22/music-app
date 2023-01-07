<template>
<div class="client">
  <TheNavigation />
  <v-main>
    <router-view/>
  </v-main>
</div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';

  export default {
    name: 'client',

    components: {
      TheNavigation,
    },
  }
</script>
