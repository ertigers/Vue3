<template>
  <h3>这是头部组件</h3>
  <div>
    {{ props.name }}
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  age: Number,
})
</script>

<style lang="scss" scoped>

</style>