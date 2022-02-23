<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Products</h3>
      </div>
      <div>{{ products[9] }}</div>
    </div>
    <div class="row"></div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      baseURL: "https://fast-fortress-80573.herokuapp.com",
      products: []


    }
  },
  methods: {
    async getProducts() {
      await axios.get(`${this.baseURL}/product/list`)
        .then(res => this.products = res.data)
        .catch(err => console.log(err))
    }
  },
  mounted() {
    this.getProducts();
  }

};

</script>
<style ></style>