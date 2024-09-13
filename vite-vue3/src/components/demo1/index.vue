<script setup>
import { reactive } from 'vue';

import Header from './header.vue';
import Footer from './footer.vue';

const person = reactive({
  name: '斑鳜',
  age: 4
})

const emitAddAge = () => {
  person.age++;
}
</script>

<template>
  <Header v-bind="person" />
  <div>
    这是zhongjian组件
  </div>
  <Footer v-bind="person" @addAge="emitAddAge" />
</template>

<style scoped>
</style>
