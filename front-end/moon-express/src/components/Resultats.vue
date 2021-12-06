<template>
  <div class="resultat">
    <!--mettre la date du vol -->
    <div style="margin: 0.2%; padding:0.2%; background-color: white;">
       {{results.name}}
       <!-- formater la date -->
       date : {{results.date}}
       place restante : {{results.nbPlaceRemaining}}
       prix : {{results.price}} $
       <button v-on:click="choixDeLaFusee"> Selectionner</button>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "resultat",
  props:{
      results: {}
  },
  methods:{
    choixDeLaFusee(){
        console.log("click choix : ",this.results)
        this.$emit("selectedFusee", this.results)
    }
  }
};
</script>

<style scoped>
@import "../assets/form.css";
</style>