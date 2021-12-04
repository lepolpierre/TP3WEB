<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'Login' }">Login</router-link> |
      <router-link :to="{ name: 'Signup'}" >Sign up</router-link> |

            <!-- juste pour tester l'affiche du form => a mettre dans home -->
      <router-link :to="{ name: 'Research'}" >Recherche</router-link>

    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  border-radius: 3%;
}

#nav a {
  background-color: rgba(100, 200, 100, 0.5);
  border-radius: 10px;
  padding: 1%;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgba(200,50,50,0.5);
}
</style>
