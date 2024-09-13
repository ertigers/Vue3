<script setup>
import { reactive, provide } from 'vue';

import Header from './header.vue';
  let person = reactive({
    name: '斑鳜',
    age: 4
  })

  const addAge = () => {
    person.age++;
  }

  provide('providePerson', person)
  provide('provideFnAddAge', addAge)
</script>

<template>
  <Header />
</template>

<style scoped>
</style>
