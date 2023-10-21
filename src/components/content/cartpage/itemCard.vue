<script setup>
import { useCounterStore } from "@/stores/counter";

defineProps({
  id: {
    type: Number,
    default: () => "",
  },
  title: {
    type: String,
    default: () => "",
  },
  price: {
    type: Number,
    default: () => 0,
  },
  currency: {
    type: String,
    default: () => "",
  },
  count: {
    type: Number,
    default: () => 0,
  },
  imgSrc: {
    type: String,
    default: () => "",
  },
  imgAlt: {
    type: String,
    default: () => "",
  },
});

const counter = useCounterStore();
const trashSrc = "src/images/trash-alt-svgrepo-com.svg";

const trashFunction = (e, count) => {
  for (let i = 0; i <= count; i++) {
    counter.deleteFromCart(e);
  }
};
</script>

<template>
  <div class="itemCard" v-if="counter.cartDict[id] > 0">
    <div class="imgBox">
      <img :src="imgSrc" :alt="imgAlt" />
      <div class="numberPicker">
        <button @click="counter.deleteFromCart(this)" class="button decrement">
          -
        </button>
        <input type="number" :value="counter.cartDict[id]" min="0" />
        <button @click="counter.addToCart(this)" class="button increment">
          +
        </button>
      </div>
    </div>
    <div class="content">
      <div class="title">
        <span>{{ title }}</span>
        <button
          @click="trashFunction(this, counter.cartDict[id])"
          class="trash"
        >
          <img :src="trashSrc" alt="X" />
        </button>
      </div>
      <textarea
        placeholder="Tutaj możesz wpisać dodatkowe informacje.."
      ></textarea>
      <div class="price">
        <span>Cena: {{ counter.cartDict[id] * price }}{{ currency }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.itemCard {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60vw;
  border-radius: 10px;
  box-shadow: 2px 4px 10px 1px #01111170;
  overflow: hidden;

  .imgBox {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 160px;
      padding: 10px;
    }

    .numberPicker {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      margin: 10px 20px 20px;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 2px 4px 6px 1px #01111170;

      input {
        width: 60px;
        height: 40px;
        border: none;
        font-size: 20px;
        font-weight: bold;
        padding: 10px;
        text-align: center;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        &[type="number"] {
          appearance: textfield;
        }
      }
      .button {
        width: 40px;
        height: 40px;
        border: none;
        background-color: #26ad60;
        color: #fff;
        font-size: 26px;
        font-weight: bold;

        &:hover {
          cursor: pointer;
          background-color: #1d8048;
        }
      }
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 20px 20px;
    gap: 20px;

    .title {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      width: 100%;
      span {
        font-size: 20px;
        font-weight: bold;
      }

      .trash {
        position: absolute;
        top: -230px;
        right: -10px;
        border: none;
        background-color: transparent;
        transition: rotate 0.1s ease-in-out;
        img {
          width: 30px;
          aspect-ratio: 1;
        }
        &:hover {
          rotate: -15deg;
          cursor: pointer;
          color: #c00000;
        }
      }
    }

    textarea {
      width: 100%;
      height: 100px;
      padding: 10px;
      font-size: 16px;
      border: none;
      border-radius: 10px;
      box-shadow: 2px 4px 6px 1px #01111170;
    }

    .price {
      width: 100%;
      display: flex;
      justify-content: end;

      span {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}

@import "@/components/content/cartpage/_mediaItemCard.scss";
</style>
