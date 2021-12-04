<template>
  <div class="home">
    <research/>

    // ici on va ajouter le reste des components: Resultat de la recherche si yen a , et le paiement
    // cv etre des components separes aussi commme reseach, et on les manipule a fur et a mesure.
    // le parent reste toujours Home.vue, qui contient le tout, donc les enfants devront gerer les emits.. BEURKKK
  </div>
</template>



<script>
// @ is an alias to /src
import Research from '@/components/Research.vue'

export default {
  name: 'Home',
  components: {
    Research
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  },

}
</script>
