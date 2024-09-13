<script setup>
import { useWebStore } from '../../stores/web.js';
const webStore = useWebStore();
console.log(webStore);



</script>

<template>
  <h3>{{ webStore.count }}</h3>
  <h3>{{ webStore.person.name }}- {{ webStore.person.age }}</h3>

  <button @click="webStore.increment">+1</button>
</template>

<style scoped>
</style>
