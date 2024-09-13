<template>
  <h3>这是头部组件</h3>
  <div>
    {{ person.name }}
  </div>
  <Nav />
</template>

<script setup>
  import Nav from './nav.vue';
  import { inject } from 'vue';
  const person = inject('providePerson');
</script>

<style lang="scss" scoped>

</style>