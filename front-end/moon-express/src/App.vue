<template>
  <div>
    <nav-bar/>
    <router-view />
  </div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {};
  },
};
</script>

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
  border-radius: 4px;
  padding: 1%;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgba(200, 50, 50, 0.5);
}
</style>
