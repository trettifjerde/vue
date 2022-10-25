<template>
  <div class="splash-container">
    <div class="splash">
      <h1>Splendid Food</h1>
    </div>
  </div>

  <main class="wrapper">

    <h2>Recommended</h2>

    <div class="recommended">

      <ProductComponent 
        v-for="(product, i) in inventory.slice(0, 3)" 
        :key="i" :product="product"
        :addToCart="addToCart"
        :getIcon="getIcon" />
        
    </div>
  </main>
</template>

<script>
import ProductComponent from '@/components/ProductComponent.vue';
export default {
    name: "HomeView",
    props: ["inventory", "cart", "addToCart", "getIcon"],
    components: { ProductComponent }
};
</script>
