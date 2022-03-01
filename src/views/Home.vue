 <template>
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">
      <div class="container py-6">
        <header class="text-left text-white py-5">
          <h3 class="mb-4 rounded" id="heading">
            <router-link :to="{ name: 'Products' }">
              <a href="#start-shopping" class="bg-white px-2 py-2 rounded">Start shopping</a>
            </router-link>
          </h3>
          <p class="lead mb-0 bg-dark p-1 rounded">
            Bumapp is a web application for selling several items used in
            construction , ranging from heavy machinery to light weight , at this point in time ..not many online features
            are supported.. you can explore the items in our stock from homepage. In the admin panel you may add products
            to the database which is with the API (having name, description, price and image adress). In the mean time you may
            create user accounts using the sign up button in the Navigation bar Sign in amd search are to be implemented at a later stage
            perhaps after adding firebase extensions to support sign in by social networks like facebook or instagram
          </p>
        </header>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Products</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.productSize"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <ProductBox :product="products[index - 1]"></ProductBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from "../components/Product/ProductBox.vue";
export default {
  name: "Home",
  components: { ProductBox },
  props: ["products"],
  data() {
    return {
      productSize: 0,
    };
  },
  mounted() {
    this.productSize = Math.min(6, this.products.length);
  },
};
</script>
<style>
.bg-cover {
  background-size: cover !important;
}
.page-holder {
  min-height: 100vh;
}
#background-div {
  background: url("../assets/home-first.jpg");
}
</style>