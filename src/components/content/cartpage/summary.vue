<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
const summaryPrice = ref(0);

const getSummaryPrice = () => {
  counter.cartData.forEach((e) => {
    summaryPrice.value += counter.cartDict[e.id] * e.price;
  });
};

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
        <tr v-for="(item, index) in counter.cartData" :key="index">
          <template v-if="counter.cartDict[item.id] > 0">
            <td>{{ item.title }}</td>
            <td>{{ counter.cartDict[item.id] }}</td>
            <td>
              {{ counter.cartDict[item.id] * item.price }}{{ item.currency }}
            </td>
          </template>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Razem:</th>
          <td>{{ counter.storeCounter.count }}</td>
          <td>{{ counter.storeCounter.price }}PLN</td>
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
