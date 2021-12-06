<template>
  <div class="payment" v-if="fusee.name != null">
  
    <div >
       {{fusee.name}}
       <!-- formater la date -->
       date : {{fusee.date}}
       place restante : {{fusee.nbPlaceRemaining}}
       prix : {{fusee.price}} $
       <!-- ajouter nombre de personnes choisie dans le form --> 
       <button > Payer</button>
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
</style>