<template>
  <div class="card w-100 h-100">
    <div class="embed-respnsive embed-responsive-by">
      <img
        class="card-img-top embed-responsive-item"
        :src="product.imgURL"
        alt="image for product"
      />
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'ShowProduct', params: { id: product.id }}">
        <h5 class="card-title">{{ product.name }}</h5>
      </router-link>
      <p class="card-text font-italic">{{ product.description.substring(0, 60) }}...</p>
      <p class="card-text py-2"><sup>MWK</sup> {{ product.price }}</p>
      <router-link
        :to="{ name: 'EditProduct', params: { id: product.id } }"
        v-show="$route.name == 'Product'"
      >
        <a href="#" class="btn btn-primary">Edit</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "productBox",
  props: ["product"],
  methods: {},
};
</script> 
<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>