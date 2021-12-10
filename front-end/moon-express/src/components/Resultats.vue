<template>
  <div class="resultat">
    <!--mettre la date du vol -->
    <div class="result" >

        <!-- option 1 =>  <img style="width:5%;height:5%;" :src="require('../assets/images' + results.image)" alt="">-->
      <img src="image" alt="image de rocket">
       
       <div class="contenu">
        <div><strong>Nom :</strong> {{results.name}}</div>
        <div> <strong>date :</strong> {{results.date.split('T')[0]}}</div>
        <div> <strong>Place(s) restante(s) :</strong> {{results.nbPlaceRemaining}}</div>
        <div> <strong>Prix :</strong> {{results.price}} $</div>
       </div>

       <button class="selectBtn" v-on:click="choixDeLaFusee"> Selectionner</button>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "resultat",
  props:{
      results: {
        type: Object
      }
  },
  data(){
    return {
      image: ""
    }
  },
  methods:{
    choixDeLaFusee(){
        // console.log("click choix : ",this.results)
        this.$emit("selectedFusee", this.results)
    }
  },

  created(){
    // J'arrive pas bizzarement à afficher l'image, si on tape en "hard-code" le src de l'image ca fonctionne, mais pas en étant une variable.
    console.log('this.results', this.results);
    this.image = `../assets/images/1.jpg`
    console.log("image",this.image)
  }
};
</script>

<style scoped>
@import "../assets/form.css";
@import "../assets/components.css";


.result{
  display: flex;
}

.contenu{
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.selectBtn ,img{
  align-self: center;
}

img{
  width: 10%;
  border-radius: 3%;
  padding: 1%;
}

</style>