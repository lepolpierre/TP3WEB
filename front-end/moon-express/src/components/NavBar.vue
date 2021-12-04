<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Acceuil</router-link> |
    <router-link :to="{ name: 'Signup' }">Sign up</router-link> |

    <router-link v-show="!isLogged" :to="{ name: 'Login' }">Connexion</router-link> 
    <a @click="logout" v-show="isLogged" class="nav-item">Déconnexion</a>
  </div>
</template>

<script>
export default {

    name: "NavBar",
    data(){
        return{
            isLogged: false
        }
    },
    watch:{
        $route(){
            this.isLogged = localStorage.getItem('token') !== null;
        }
    },
    methods:{
        logout(){
            localStorage.removeItem('token');
            this.isLogged = false;
            this.$router.push({name: 'Home'});
        }
    },
    created(){
        this.isLogged = localStorage.getItem('token') !== null;
    }
};
</script>

<style scoped>

.nav-item{
  cursor: pointer;

}
</style>