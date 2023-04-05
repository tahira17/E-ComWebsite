<template>
    <div class="product-card" style="margin-top: 100px;">
      <div class="image-container">
        <img class="img-style" :src="ProductView.imgSrc" :alt="brand + model" />
      </div>
      <p class="price-label">₿ {{ ProductView.price.toFixed(2) }}</p>
      <button @click="addToCart">Add to Cart</button>
      <br/>
      <span class="product-title">
        {{ ProductView.brand }} {{ ProductView.model }} {{ ProductView.color }} {{ ProductView.capacity }}
      </span>
    </div>
    </template>
    
    
    <script>


    export default {
        components : {

        },
        computed:{
ProductView(){
    const Prod=this.$store.getters["product"];
    return Prod
}
    }     
     
    }
    
    </script>
<style>
 .img-style {
    display: flex;
    height: 250px;
    object-fit: cover;
  }
  
  .image-container {
    display: flex;
    justify-content: center;
  }
  
  .product-title {
    display: flex;
    color: rgba(66, 185, 131, 1);
    font-weight: bold;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
  }
  
  .price-label {
    font-weight: bold;
    font-size: 20px;
  }

</style>
