<template>
  <div class="research">
    <h3>Recherche</h3>

    <form action="" method="POST" @submit.prevent="onSubmit">
      <span class="erreur">{{ erreur }}</span>

      <!-- Revoir les types des imputs -->
      <div>
        <label for="date">Date : </label>
        <input v-model="date"
        type="date" name="date" id="date" />
      </div>

      <div>
        <label for="nbPpl">Nombre de personnes :</label>
        <input v-model.number="nbPpl"
        type="number" name="nbPpl" id="nbPpl" min="1" />
      </div>

      <div>
        <label for="depart">Depart</label>
        <select name="depart" id="depart">
            <option v-for="nom,index in nomSpatios" :key="index" :value="nom">{{nom}}</option>
        </select>
      </div>

      <div>
        <label for="destination">Destination :</label>
        <select name="destination" id="destination">
            <option v-for="nom,index in nomSpatios" :key="index" :value="nom">{{nom}}</option>
        </select>
      </div>

      <button type="submit" class="btn">Recherche</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "research",
  data() {
    return {
      nomSpatios: [],
      erreur: "",
      date: "",
      nbPpl: "",
      depart: "",
      destination: "",
    };
  },
  methods: {
    
    // Récupérer les noms des spatioports afin que l'utilisateur puisse en choisir.
    recupNomSpatio() {
      fetch("http://localhost:3000/spatioport")
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw new Error("Erreur lors de la récupération des Spatioport");
          }
        })
        .then((data) => {
          this.nomSpatios = data.spatioports.map((r) => r.city);
          console.log("this.nomSpatios", ...this.nomSpatios);
        });
    },
    validations() {
      // Faire la validation
      // if( ){

      //     return false;
      // }
      // else{
      //     this.erreur = "";
      // }

      return true;
    },
    onSubmit() {
      // if(this.validations())
    //   this.appelApi();
    },
    appelApi() {
      const research = {
        date: this.date,
        nbPpl: this.nbPpl,
        depart: this.depart,
        destination: this.destination,
      };
      // a declarer dans le router index ?
      let url = "http://localhost:3000/research";

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(research),
      })
        .then((res) => {
          if (res.status === 200) return res.json();
          else {
            throw new Error("Erreur de recherche");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },

    typeDate(){
        console.log('this.date', typeof this.date);
    }
  },


  created(){
      this.recupNomSpatio();
  }
};
</script>

<style scoped>
@import "../assets/form.css";

</style>