<template>
  <div class="research">
    <h3>Recherche</h3>

    <form action="" method="POST" @submit.prevent="onSubmit">
    
      <span class="erreur">{{erreur}}</span>


<!-- Revoir les types des imputs -->
      <div>
        <label for="date">Date : </label>
        <input 
        type="date" name="date" id="date" />
      </div>

      <div>
          <label for="nbPpl">Nombre de personnes :</label>
          <input 
            type="number" name="nbPpl" id="nbPpl" >
      </div>

        <div>
          <label for="depart">Depart</label>
          <input 
         name="depart" id="depart" >
        </div>

        <div>
          <label for="destination">Destination :</label>
          <input 
         name="destination" id="destination" >
         </div>

         <button type="submit" class="btn">Recherche</button>
      
    </form>
  </div>
</template>

<script>
export default {
    name : 'research',
    data(){
        return{
            erreur:'',
            date : "",
            nbPpl: "",
            depart : "",
            destination: ""
            
        }
    },
    methods: {
        validations(){
            // Faire la validation
            // if( ){
                
            //     return false;
            // }
            // else{
            //     this.erreur = "";
            // }

            return true;
        },
        onSubmit(){
            // if(this.validations())
                this.appelApi();
        },
        appelApi(){

            const research = {
                date : this.date,
                nbPpl: this.nbPpl,
                depart : this.depart,
                destination: this.destination
            }
            // a declarer dans le router index ? 
            let url = "https://tp4hebergement.herokuapp.com/research"

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(research)
            })
            .then(res=>{
                if(res.status === 200)
                    return res.json();
                else{
                    throw new Error("Erreur de recherche");
                }
            })
            .catch(err=> {
                console.error(err);
            })

        }
    }
};
</script>

<style scoped>

@import '../assets/form.css';


</style>