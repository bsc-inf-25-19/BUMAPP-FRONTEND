<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Product</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form v-if="product">
          <div class="form-group">
            <label>Product Name</label>
            <input type="form" class="form-control" v-model="product.name" required />
          </div>
          <div class="form-group">
            <label>Product Description</label>
            <input type="text" class="form-control" v-model="product.description" required />
          </div>
          <div class="form-group">
            <label>Product Price</label>
            <input type="number" class="form-control" v-model="product.price" required />
          </div>
          <div class="form-group">
            <label>Image URL</label>
            <input type="form" class="form-control" v-model="product.imgURL" required />
          </div>
          <button type="submit" class="btn btn-primary" @click="editProduct">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  data() {
    return {
      product: null,
      id: null,
    };
  },
  props: ["baseURL", "products"],
  methods: {
    async editProduct() {
      await axios
        .post(this.baseURL + "/product/update/" + this.id, this.product)
        .then(() => {
          this.$emit("fetchData");
          this.$router.push({ name: 'Product' });
          swal({
            text: "Product Updated Successfully!",
            icon: "success"
          });
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
  },
};
</script>

<style>
</style> 