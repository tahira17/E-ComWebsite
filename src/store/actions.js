export default{
    addToCart(context , payload){
        const prodId=payload.id
        const products=context.rootGetters.products
        const product = products.find((prod)=>prod.id === prodId)
        context.commit("addProductsToCart", product)
    },
    removeFromCart(context,payload){
        context.commit("removeProductFromCart",payload)
    },
    ProductPage(context , payload){
        const prodId=payload.id
        const products=context.rootGetters.products
        const product = products.find((prod)=>prod.id === prodId)
     console.log(product)
     this.state.product=product
     console.log(" this.state.product", this.state.product)
    

    },
}