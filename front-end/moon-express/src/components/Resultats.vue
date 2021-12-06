<template>
  <div class="resultat">
    <!--mettre la date du vol -->
    <div style="margin: 0.2%; padding:0.2%; background-color: white;">

        <!-- option 1 =>  <img style="width:5%;height:5%;" :src="require('../assets/images' + results.image)" alt="">-->
        <!-- option 1 =>  <img style="width:5%;height:5%;" :src="'../assets/images/'+results.image" alt="">-->
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
  data(){
    return {
      image: ""
    }
  },
  methods:{
    choixDeLaFusee(){
        console.log("click choix : ",this.results)
        this.$emit("selectedFusee", this.results)
    }
  },

  created(){
    this.image = `/assets/images/${this.results.image}`
    console.log(this.image)
  }
};
</script>

<style scoped>
@import "../assets/form.css";
</style>