<template>
<Wrapper>
<ProductCard
v-for="product in products"
:key="product.id"
      :id="product.id"
      :type="product.type"
      :brand="product.brand"
      :model="product.model"
      :color="product.color"
      :capacity="product.capacity"
      :imgSrc="product.imgSrc"
      :price="product.price"
/>
</Wrapper>
</template>


<script>
import ProductCard from "@/components/ProductCard";

export default {
    components : {
ProductCard
    },

    computed:{
products(){
    const productSort=this.$store.getters["products"];
    return productSort.sort((a,b)=>{
        if(a.model <b.model){
            return -1
        }
        if(a.model > b.model){
            return 1
        }
        return 0
    })
}
    }
}

</script>