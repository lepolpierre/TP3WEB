<template>
  <div class="signup">
      <h3>Création de compte</h3>

      <form method="POST" action="" @submit.prevent="onSubmit">

        <span class="erreur">{{erreur}}</span>
        
        <div>
            <label for="nom">Votre nom:</label>
            <input v-model.trim="name"
            type="text" id="nom" name="nom" placeholder="Votre nom...">
        </div>
        
        <div>
            <label for="email">Courriel:</label>
            <input v-model.trim="email"
            type="email" name="email" id="email" placeholder="Courriel unique...">
        </div>

        <div>
            <label for="mdp">Mot de passe:</label>
            <input v-model.trim="password"
            type="password" id="mdp" name="mdp" placeholder="Clé secrète...">
        </div>

        <div>
            <label for="level">Niveau:</label>
            <select name="level" id="level">
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </div>

        <button type="submit" class="btn">Créer</button>
      </form>
  </div>
</template>

<script>
export default {
    data(){
        return {
            erreur : "",
            email: "",
            name: "",
            password: "",
            level : 1
        }
    },
    methods:{
        validations(){
            if(this.email.length <= 0 || this.name.length <= 0 || this.password.length <= 0){
                this.erreur = "Veuillez remplir les champs correctement!";
                return false;
            }
            else{
                this.erreur="";
            }
            return true;
        },
        onSubmit(){
            if(this.validations())
                this.appelApi();
            
        },
        appelApi(){
            const user = {
                email: this.email,
                name: this.name,
                password: this.password,
                level: this.level
            }

            fetch('http://localhost:3000/auth/signup', {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=>{
                if(res.status === 201)
                    return res.json();
                else{
                    throw new Error('Erreur de création d\'utilisateur');
                }    
            })
            .then(data=>{
                // Renvoie vers la connexion
                this.$router.push({name: 'Login'});
            })
            .catch(err=> {
                console.error(err);
            })


        }
    }
}
</script>

<style>
@import '../assets/form.css';

</style>