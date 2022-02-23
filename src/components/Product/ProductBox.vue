<template>
  <div class="card w-100 h-100">
    
      <img class="card-img-top embed-responsive-item " src = product.imgURL alt="Card image cap" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <p class="card-text">{{product.description}}</p>
            <h3 class="card-text">{{product.price}}</h3>

      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productBox',
  props: ["product"],
  methods: {}
};
</script> 