<template>
  <div class="paymentResult" v-if="fusee.name != null">
  
    <div >
       {{fusee.name}}
       <!-- formater la date -->
       date : {{fusee.date}}
       place restante : {{fusee.nbPlaceRemaining}}
       prix : {{fusee.price}} $
       <!-- ajouter nombre de personnes choisie dans le form --> 
       <button @click="effectuerReservation" > Payer</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "payment",
  props:{
    fusee:{},
    nbPerson:{
      type: Number,
      required: true
    }
  },
  methods:{
    effectuerReservation(){
      fetch(`https://tp4hebergement.herokuapp.com/`)
    }
  },

  created(){
    console.log('this.fusee', this.fusee._id);
    console.log('this.nbPerson', this.nbPerson);
  }
};
</script>

<style scoped>
@import "../assets/form.css";
@import "../assets/components.css";
</style>