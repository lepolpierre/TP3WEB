<template>
  <div class="resultat">
    <!--mettre la date du vol -->
    <div class="result" >
      <div>{{results.name}}</div>
      <div>
        <!-- option 1 =>  <img style="width:5%;height:5%;" :src="require('../assets/images' + results.image)" alt="">-->
        <!-- option 1 =>  <img style="width:5%;height:5%;" :src="'../assets/images/'+results.image" alt="">-->
      </div>
       
       <div class="rowContainer">
          <div id="row">date : {{results.date.split("T")[0]}}</div>
          <div id="row">place restante : {{results.nbPlaceRemaining}}</div>
          <div id="row">prix : {{results.price}} $</div>
       </div>

       <div ><button v-on:click="choixDeLaFusee"> Selectionner</button></div>
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

@import "../assets/components.css";
</style>