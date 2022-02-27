<template>
  <div id="nav">
    <Navbar/>
  </div>
  
  <router-view 
  :baseURL="baseURL" 
  :products="products"
  @fetchData ="fetchData"></router-view>

  <div id="foot">
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import axios from "axios";
export default {
  data() {
    return {
      baseURL: "https://fast-fortress-80573.herokuapp.com",
      products: [],
    };
  },
  components: { Navbar, Footer },
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
#footer p{
  font-size: 15px;
  color:#2c3e50;
  padding-top: 1vw;
  padding-bottom: 1vw;
  bottom: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
