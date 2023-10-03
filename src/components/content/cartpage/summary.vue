<script setup>
import { ref } from "vue";

defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});

const cartData = ref([]);

cartData.value = [
  { id: 1, Name: "Dieta 1500kcal", Count: 1, Price: 100, Currency: "PLN" },
  { id: 2, Name: "Dieta 2000kcal", Count: 2, Price: 200, Currency: "PLN" },
  { id: 3, Name: "Dieta 2500kcal", Count: 3, Price: 300, Currency: "PLN" },
];

const summaryPrice = ref(0);

const getSummaryPrice = (arr) => {
  arr.forEach((e) => {
    summaryPrice.value += e.Count * e.Price;
  });
};

const currency = ref("");
currency.value = "PLN";

getSummaryPrice(cartData.value);
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
        <tr v-for="(item, index) in cartData" :key="index">
          <td>{{ item.Name }}</td>
          <td>{{ item.Count }}</td>
          <td>{{ item.Count * item.Price }}{{ item.Currency }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <th>Razem:</th>
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
