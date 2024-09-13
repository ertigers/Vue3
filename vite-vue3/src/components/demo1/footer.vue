<template>
  <h3>这是尾部组件</h3>
  <div>
    {{ props.name }} - {{ props.age }}
  </div>
  <button @click="addAge">+1</button>
</template>

<script setup>
const emits = defineEmits(['addAge'])

const props = defineProps({
  name: String,
  age: Number,
})

const addAge = () => {
  emits('addAge')
}

</script>

<style lang="scss" scoped>

</style>