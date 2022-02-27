<template>
<div class="container py-10">
 <router-link :to="{ name: 'Product' }">
        <button type="button" class="btn btn-primary btn-lg">Products in Database</button>
    </router-link>
</div>
   
</template>

<script>
export default {

}
</script>

<style>
.btn{
    margin-bottom: 50px;
}
</style>