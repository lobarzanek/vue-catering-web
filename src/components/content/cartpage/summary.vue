<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";

const props = defineProps({
  cartData: {
    type: Array,
    default: () => [],
  },
});

const counter = useCounterStore();
console.log(props.cartData);

const summaryPrice = ref(0);
const currency = ref("");

const getSummaryPrice = () => {
  summaryPrice.value += props.cartData.reduce(
    (total, e) => total + e.price * e.Count,
    0
  );
};

const getCurrency = () => {
  currency.value = props.cartData[0].currency
}
getCurrency();
getSummaryPrice();
</script>

<template>
  <div class="summaryContainer">
    <span class="title">Podsumowanie</span>
    <table class="dataBox">
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Ilość</th>
          <th>Cena</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in props.cartData" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.Count }}</td>
          <td>{{ item.Count * item.price }}{{ item.currency }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Razem:</th>
          <td>{{ counter.count }}</td>
          <td>{{ summaryPrice }}{{ currency }}</td>
        </tr>
      </tfoot>
    </table>
    <button>Przejdź do wyboru daty i płatności</button>
  </div>
</template>

<style scoped lang="scss">
.summaryContainer {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  margin: 0 30px;
  gap: 20px;

  .title {
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 2px 4px 10px 1px #01111170;
  }

  .dataBox {
    padding: 10px;
    border-radius: 12px;
    box-shadow: 2px 4px 10px 1px #01111170;
    tr {
      th,
      td {
        font-size: 20px;

        padding: 5px 10px;
        text-align: left;
      }
    }
    tfoot {
      tr {
        td {
          font-weight: bold;
        }
      }
    }
  }

  button {
    width: 100%;
    padding: 10px;
    border-radius: 12px;
    border: none;
    background-color: #26ad60;
    box-shadow: 2px 2px 4px 1px #01111170;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    transition: 0.3 easy background-color;

    &:hover {
      cursor: pointer;
      background-color: #1d8048;
    }
  }
}
</style>
