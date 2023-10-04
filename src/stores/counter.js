import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const tab = ref([]);
  const cartData = ref([]);

  const cart = computed(() => tab._rawValue);
  function increment(id) {
    count.value++;
    tab._rawValue.push(id);
  }
  function decrement(id) {
    count.value--;
  }
  return { count, increment, length, cart, cartData };
});

