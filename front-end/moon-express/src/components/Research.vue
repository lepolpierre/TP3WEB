<template>
  <div class="research">
    <h3>Recherche</h3>

    <form action="" method="POST" @submit.prevent="onSubmit">
      <span class="erreur">{{ erreur }}</span>

      <!-- Revoir les types des imputs -->
      <div>
        <label for="date">Date : </label>
        <input v-model="date" type="date" name="date" id="date" />
      </div>

      <div>
        <label for="nbPpl">Nombre de personnes :</label>
        <input
          v-model.number="nbPpl"
          type="number"
          name="nbPpl"
          id="nbPpl"
          min="1"
        />
      </div>
      <span class="erreur">{{ erreurDepDest }}</span>
      <div>
        <label for="depart">Depart</label>
        <select v-model.trim="depart" name="depart" id="depart">
          <option v-for="(nom, index) in nomSpatios" :key="index" :value="nom">
            {{ nom }}
          </option>
        </select>
      </div>

      <div>
        <label for="destination">Destination :</label>
        <select v-model="destination" name="destination" id="destination">
          <option v-for="(nom, index) in nomSpatios" :key="index" :value="nom">
            {{ nom }}
          </option>
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
      erreurDepDest:"",
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
      // Validations sur la date et le nombre de personnes.
      let valide;
      if (this.date.length <= 0 || this.nbPpl <= 0) {
        this.erreur = "Veuillez vous assurez de remplir les champs correctement!";
        valide = false
      } else {
        this.erreur = "";
        valide = true;
      }

      
      // Validations sur la place de depart et arrivée.

      if(this.depart === this.destination && this.depart.length > 0 && this.destination.length > 0){
        this.erreurDepDest= "La destination doit être différente de l'emplacement de départ!";
        valide =false;

      }
      else{
        this.erreurDepDest = "";
        valide = true;
      }


      return valide;
    },
    onSubmit() {
      console.log("this.validations()", this.validations());
      console.log("boop")
      this.appelApi();
    },
    appelApi() {

      let url = `http://localhost:3000/search/${this.date}/${this.nbPpl}/${this.depart}/${this.destination}`;

      fetch(url)
        .then((res) => {
          if (res.status === 200) return res.json();
          else {
            throw new Error("Erreur de recherche");
          }
        })
        .then(data=>{
            this.$emit('resultRecherche', data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },

  created() {
    this.recupNomSpatio();
  },
};
</script>

<style scoped>
@import "../assets/form.css";
</style>