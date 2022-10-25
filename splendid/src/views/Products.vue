<template>
<main class="wrapper">
  <h1>Products</h1>

  <div class="card-container">
    <ProductComponent 
      v-for="(product, i) in inventory" :key="i"
      :product="product"
      :addToCart="addToCart"
      :getIcon="getIcon" />
  </div>
</main>
</template>

<script>
import ProductComponent from '../components/ProductComponent.vue';
export default {
    name: "ProductsView",
    props: ["inventory", "cart", "addToCart", "getIcon"],
    components: { ProductComponent }
};
</script>
