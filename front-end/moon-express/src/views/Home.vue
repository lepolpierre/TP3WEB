<template>
  <div class="home">
    <research @resultRecherche="ResultatRecherche" />

    <div v-if="lstResultats.length > 0">
      <div style="background-color: green; margin: 5%">
        <div v-for="(result, index) in lstResultats" :key="index">
          <resultats
            :results="result"
            @selectedFusee="SelectedFusee"
          ></resultats>
        </div>
      </div>
      <!-- quand on click sur le btn selectionner recupere les infos de la fusee -->
      <div v-if="selectedFusee">
        <payment :fusee="selectedFusee"></payment>
      </div>
    </div>
    <!-- <h2 v-show="rechercheActive" v-else>Aucun résultat trouvé :/</h2> -->

    <!-- ici on va ajouter le reste des components: Resultat de la recherche si yen a , et le paiement
    // cv etre des components separes aussi commme reseach, et on les manipule a fur et a mesure.
    // le parent reste toujours Home.vue, qui contient le tout, donc les enfants devront gerer les emits.. BEURKKK -->
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
    };
  },
  methods: {
    ResultatRecherche(rockets) {
      this.lstResultats = rockets;
      console.log('rockets', rockets);
    },
    SelectedFusee(fusee) {
      this.selectedFusee = fusee;
    },
  },
};
</script>
