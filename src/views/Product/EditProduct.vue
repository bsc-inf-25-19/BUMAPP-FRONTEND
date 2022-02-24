<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">Edit Product</h4>
            </div>
        </div>
        <div class="row">{{product}}</div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            product: null,
            id: null
        }
    },
    props: ["baseURL", "products"],
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find(product => product.id == this.id);
        console.log('product', this.product);
    }

}
</script>

<style>
</style>