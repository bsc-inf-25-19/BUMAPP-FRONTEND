<template>
  <div id="nav">
    <navbar/>
  </div>
  <router-view 
  :baseURL="baseURL" 
  :products="products"
  @fetchData ="fetchData"></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import axios from "axios";
export default {
  data() {
    return {
      baseURL: "https://fast-fortress-80573.herokuapp.com",
      //baseURL: "http://localhost:8080/",
      products: [],
    };
  },
  components: { Navbar },
  methods: {
    async fetchData() {
      // fetch products
      await axios
        .get(this.baseURL + '/product')
        .then((res) => (this.products = res.data))
        .catch((err) => console.log(err));
    }

  },
  mounted() {
    this.fetchData();
  }
}

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
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
