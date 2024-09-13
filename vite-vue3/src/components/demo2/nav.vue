<template>
  <h3>这是nav组件</h3>
  <div>
    {{ person.name }} - {{ person.age }}
  </div>
  <button @click="addAge">+1</button>
</template>

<script setup>
  import { inject } from 'vue';
  const person = inject('providePerson');

  const addAge = inject('provideFnAddAge');
</script>

<style lang="scss" scoped>

</style>