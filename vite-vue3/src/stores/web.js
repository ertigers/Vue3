import { reactive, ref } from "vue";
import { defineStore } from "pinia";

export const useWebStore = defineStore("web", () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }
  const person = reactive({
    name: "斑鳜",
    age: 20,
  });

  return { count, person, increment };
});

