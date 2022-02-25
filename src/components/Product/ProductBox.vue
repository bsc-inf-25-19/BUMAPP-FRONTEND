<template>
  <div class="card w-100 h-100">
    <div class="embed-respnsive embed-responsive-by">
      <img
        class="card-img-top embed-responsive-item"
        :src="product.imgURL"
        alt="Card image cap"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.description.substring(0, 50) }}...</p>
      <h3 class="card-text">{{ product.price }}</h3>
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