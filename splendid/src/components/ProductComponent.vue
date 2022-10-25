<template>
    <div class="card">
      <div class="card-title">
        {{ product.name }}
      </div>
      <div class="card-body">
        <i :class="getIcon(product)"></i>
        <form>
          <div class="row">
            <div class="cell">
              <label>Type:</label>
            </div>
            <div class="cell">
              <em>{{ product.type }}</em>
            </div>
          </div>
          <div class="row">
            <div class="cell">
              <label>Price:</label>
            </div>
            <div class="cell">
              ${{ product.price.USD }}
            </div>
          </div>
          <div class="row">
            <div class="cell">
              <label>Quantity:</label>
            </div>
            <div class="cell">
              <input type="number" v-model.number="n">
            </div>
          </div>
        </form>
      </div>
      <div class="card-footer">
        <button @click="addToCart(product.name, n); n=0;" class="btn btn-light">Add to cart</button>
      </div>
    </div>
</template>
<script>
    export default {
        name: 'ProductComponent',
        data() {
            return {
                n: 0
            }
        },
        props: ['product', 'addToCart', 'getIcon'],
    }
</script>