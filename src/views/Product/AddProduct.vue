<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add a Product</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Product name</label>
            <input type="text" class="form-control" v-model="productName" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea type="text" class="form-control" v-model="description" />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="number" class="form-control" v-model="price" />
          </div>
          <div class="form-group">
            <label>Image URL</label>
            <input type="text" class="form-control" v-model="imageURL" />
          </div>
          <button type="button" class="btn btn-primary" @click="addProduct">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
const sweetalert = require("sweetalert");

export default {
  data() {
    return {
      productName: "",
      description: "",
      imageURL: "",
      price: "",
    };
  },
  methods: {
    addProduct() {
      console.log(
        this.productName,
        this.description,
        this.imageURL,
        this.price
      );
      const newProduct = {
        name: this.productName,
        description: this.description,
        imgURL: this.imageURL,
        price: this.price,
      };
      const baseURL = "https://fast-fortress-80573.herokuapp.com";
      axios({
        method: "post",
        url: `${baseURL}/product/create`,
        data: JSON.stringify(newProduct),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then(() => {
          sweetalert({
            text: "Product added successfully",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style ></style>