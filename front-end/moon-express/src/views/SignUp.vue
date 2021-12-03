<template>
  <div class="signup">
      <h3>Création de compte</h3>

      <form method="POST" action="" @submit.prevent="onSubmit">

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

          
      </form>
  </div>
</template>

<script>
export default {
    data(){
        return {
            email: "",
            name: "",
            password: "",
            level : 1
        }
    },
    methods:{
        onSubmit(){
            console.log('submit');
        }
    }
}
</script>

<style>

</style>