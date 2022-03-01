 <template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="pt-3">All Products</h2>
            </div>
        </div>
        <div class="row">
            <div
                v-for="product of products"
                :key="product.id"
                class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
            >
                <ProductBox :product="product"></ProductBox>
            </div>
        </div>
    </div>
</template>

<script>
import ProductBox from "../components/Product/ProductBox.vue";
export default {
    name: "Products",
    components: { ProductBox },
    props: ["products"],
    data() {
        return {
            baseURL: "https://fast-fortress-80573.herokuapp.com",
        };
    },
};
</script>
<style>
</style>