import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const storeCounter = reactive({ count: ref(0), price: ref(0) }); //summary
  const cartDict = ref({}); //sum
  const cartData = ref([]); //sum

  function addToCart(item) {
    if (item.id in cartDict.value) {
      cartDict.value[item.id] += 1;
    } else {
      cartDict.value[item.id] = 1;
      cartData.value.push(item);
    }
    storeCounter.price += item.price;
    storeCounter.count++;
  }

  function deleteFromCart(item) {
    if (item.id in cartDict.value && cartDict.value[item.id] > 0) {
      cartDict.value[item.id] -= 1;
      storeCounter.price -= item.price;
      storeCounter.count--;
    } else {
      return;
    }
  }
  return {
    storeCounter,
    cartDict,
    cartData,
    addToCart,
    deleteFromCart,
  };
});
