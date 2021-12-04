<template>
  <div class="login">
    <h3>Connexion</h3>

    <form action="" method="POST" @submit.prevent="onSubmit">
    
      <span class="erreur">{{erreur}}</span>

      <div>
        <label for="email">Votre courriel:</label>
        <input v-model.trim="email"
        type="email" name="email" id="email" placeholder="nom@domain.com" />
      </div>

      <div>
          <label for="pwd">Mot de passe :</label>
          <input v-model.trim="pwd"
          type="password" name="pwd" id="pwd" placeholder="Ma clé secrète...">
      </div>

      <button type="submit" class="btn">Connexion</button>
      
    </form>
  </div>
</template>

<script>
export default {
    name : 'Login',
    data(){
        return{
            erreur:'',
            email : "",
            pwd: ""
        }
    },
    methods: {
        validations(){
            if(this.email.length <= 0 || this.pwd.length <= 0 ){
                this.erreur = "Erreur, utilisateur non reconnu!";
                return false;
            }
            else{
                this.erreur = "";
            }

            return true;
        },
        onSubmit(){
            if(this.validations())
                this.appelApi();
        },
        appelApi(){

            const user = {
                email : this.email,
                password: this.pwd
            }
            let url = "http://localhost:3000/auth/login"

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=>{
                if(res.status === 200)
                    return res.json();
                else{
                    throw new Error("Erreur de connexion");
                }
            })
            .then(body=>{
                // Enregistrer le token dans le localStorage.
                localStorage.setItem("token", body.token);

                // Envoyer vers l'acceuil.
                this.$router.push({name: 'Home'});
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