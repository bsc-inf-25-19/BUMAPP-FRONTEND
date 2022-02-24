<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Products</h3>
        <router-link 
        :to="{ name: 'AddProduct' }">
        <button class=" btn" style="float:right">Add new product</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div v-for="product of products" :key="product.id" class="col-xl-4 col-md-6 d-flex">
        <ProductBox :product="product"></ProductBox>
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from "../../components/Product/ProductBox.vue";
export default {
  name: "Product",
  props : ["products"],
  components: { ProductBox },
  data() {
    return {
      baseURL: "https://fast-fortress-80573.herokuapp.com",
    };
  },
  methods: {
    }
  };
  

</script>
<style ></style>