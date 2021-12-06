<template>
  <div class="paymentResult" v-if="fusee.name != null">
  
    <div class="cardPayment">
      <div>{{fusee.name}}</div>
      <div class="row">date : {{fusee.date.split("T")[0]}}</div>
      <div class="row">place restante : <div>{{fusee.nbPlaceRemaining}}</div></div>
      <div class="row">prix : <div>{{fusee.price}} $</div></div>
      <div><button > Payer</button></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "payment",
  props:{
    fusee: {}
  }
};
</script>

<style scoped>
@import "../assets/form.css";
@import "../assets/components.css";
</style>