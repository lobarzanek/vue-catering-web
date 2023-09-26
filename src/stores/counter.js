import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const tab = ref([])
  const doubleCount = computed(() => count.value * 2)
  function increment(id) {
    count.value++;
    tab._rawValue.push(id)
    console.log(tab._rawValue);
  }

  return { count, doubleCount, increment }
})
