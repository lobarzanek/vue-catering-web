<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="catering">
    <div class="title">
      <h3>Catering okolicznościowy</h3>
      <h3>Obsługa firm i hoteli</h3>
    </div>
    <div class="shadowBox">
      <div class="info">
        <p>
          Wykorzystując nasze kilkuletnie doświadczenie w branży cateringu
          dietetycznego pragniemy wyjść naprzeciw oczekiwaniom naszych Klientów
          oraz podążać za aktualnymi trendami.
        </p>
        <p>
          Nasi pracownicy to sztab wykwalifikowanych kucharzy oraz logistyków.
          Zawsze z pasją podchodzimy do naszej pracy, a każdą dietę cateringową
          przygotowujemy z zapałem, aby była doskonała w każdym aspekcie
        </p>
        <p>
          Wobec powyższego firma SzpatułaGastro postanowiła wykorzystać swój
          potencjał i rozszerzyć swoją ofertę o „Obsługę firm i hoteli w
          zakresie wyżywienia” oraz „Imprezy okolicznościowe”.
        </p>
        <p>
          Przygotujemy oraz dostarczymy dla Państwa przekąski typu finger food,
          dania obiadowe na ciepło, zupy, dania z grilla, a także desery i
          napoje.
        </p>
        <p>
          Jesteśmy w stanie zmodyfikować ofertę posiłków, kosztorys, menu
          zgodnie z oczekiwaniami Klienta oraz zapewnić obsługę serwisową.
        </p>
        <p>
          W celu dostosowania oferty do Państwa potrzeb zapraszamy do
          bezpośredniego kontaktu: catering@szpatulagastro.pl lub
          <RouterLink to="/contact" class="link">formularz</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.catering {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  gap: 40px;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    font-size: 30px;
    margin-top: 10px;
  }

  .shadowBox {
    padding: 30px;
    border-radius: 10px;
    box-shadow: 2px 4px 10px 1px #01111170;
    .info {
      display: flex;
      flex-direction: column;
      gap: 30px;
      font-size: 18px;
    }
  }
}
</style>
