<template>
  <div class="login">
    <h3>Connexion</h3>

    <form action="" method="POST" @submit.prevent="onSubmit">
      
      <div>
        <label for="email">Votre courriel:</label>
        <input v-model="email"
        type="email" name="email" id="email" placeholder="nom@domain.com" />
      </div>

      <div>
          <label for="pwd">Mot de passe :</label>
          <input v-model="pwd"
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
            email : "",
            pwd: ""
        }
    },
    methods: {
        onSubmit(){
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
            .then(response=>{
                return response.json();
            })
            .then(body=>{
                console.log('body', body);
            });

        }
    }
};
</script>

<style scoped>
form{
    width: 60vw;
    padding: 1%;
    margin: 0 auto;
    border-radius: 25px;
    border: 1px solid black;

    display: flex;
    flex-direction: column;
    align-items: center;
    
}

.btn{
    padding: 1%;
    font-weight: bold;
    border-radius: 5px;
}
</style>