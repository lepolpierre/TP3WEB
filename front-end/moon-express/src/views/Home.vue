<template>
  <div class="home">
    <research @resultRecherche="ResultatRecherche" />

    <div class="containerResultPayment" v-if="lstResultats.length > 0">
    
      <div class="results" >
    
        <div v-for="(result, index) in lstResultats" :key="index">
          <resultats
            :results="result"
            @selectedFusee="SelectedFusee">
          </resultats>    
        </div>
     
      </div>


      <div class="payment" v-if="selectedFusee != undefined">
     
          <payment :fusee="selectedFusee" :nbPerson="nbPerson"></payment>

      </div>
    
    </div>
  </div>
</template>



<script>
// @ is an alias to /src
import Research from "@/components/Research.vue";
import Resultats from "@/components/Resultats.vue";
import Payment from "@/components/Payment.vue";

export default {
  name: "Home",
  components: {
    Research,
    Resultats,
    Payment,
  },
  data() {
    return {
      rechercheActive: false,
      lstResultats: [],
      selectedFusee: {},
      nbPerson : 0
    };
  },
  methods: {
    ResultatRecherche(rockets, nbPpl) {
      this.lstResultats = rockets;
      this.nbPerson = nbPpl;
    },
    SelectedFusee(fusee) {
      this.selectedFusee = fusee;
    },


  },
};
</script>

<style scoped>
@import "../assets/components.css";
</style>