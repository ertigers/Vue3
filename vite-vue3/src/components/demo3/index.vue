<script setup>
import { reactive, provide } from 'vue';

import Header from './header.vue';
  let person = reactive({
    name: '斑鳜',
    age: 4
  })

  provide('providePerson', person)
</script>

<template>
  <Header>
    <div>
      <span>插槽的内容</span>
      {{ person.name }} - {{ person.age }}
    </div>
  </Header>

  <Header>
    <!-- <template v-slot:t1> -->
    <!-- <template #t1> -->
    <!-- <template #t1="data"> -->  
    <template #t1="{title}">
      <h1>{{ title }}</h1>
      <span>插槽的内容</span>
      {{ person.name }} - {{ person.age }}
    </template>
  </Header>
</template>

<style scoped>
</style>
