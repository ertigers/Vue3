<template>
  <h3>这是头部组件</h3>
  <div>
    {{ person.name }}
  </div>
  <slot name="t1" :title="person.name" />
</template>

<script setup>
  import { inject } from 'vue';
  const person = inject('providePerson');
</script>

<style lang="scss" scoped>

</style>