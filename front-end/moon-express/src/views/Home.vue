<template>
  <div class="home">
    {{nom}}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      nomSpatios : []
    }
  },
  methods:{
    recupNomSpatio(){

      fetch('http://localhost:3000/spatioport')
      .then(res=>{
        if(res.status === 200){
          return res.json();
        }else{
          throw new Error("Erreur lors de la récupération des Spatioport");
        }
      })
      .then(data=>{
        this.nomSpatios = data.spatioports.map(r => r.city);
        console.log('this.nomSpatios', ...this.nomSpatios);
      })
    }
  },

  created(){
    this.recupNomSpatio();
  }
}
</script>
