<template>
    <aside class="cart-container">
    <div class="cart">
      <h1 class="cart-title spread">
        <span>
          Cart
          <i class="icofont-cart-alt icofont-1x"></i>
        </span>
        <button @click="toggle" class="cart-close">&times;</button>
      </h1>

      <div class="cart-body">
        <table class="cart-table">
          <thead>
            <tr>
              <th><span class="sr-only">Product Image</span></th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(quantity, name, i) in cart" :key="i">
              <td><i class="icofont-carrot icofont-3x"></i></td>
              <td>{{ name }}</td>
              <td>${{ getPrice(name)}}</td>
              <td class="center">{{ quantity }} </td>
              <td>${{ (quantity * getPrice(name)).toFixed(2) }}</td>
              <td class="center">
                <button @click=remove(name) class="btn btn-light cart-remove">
                  &times;
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <p v-if="!Object.keys(cart).length" class="center"><em>No items in cart</em></p>
        <div class="spread">
          <span><strong>Total:</strong> ${{ calculateTotal() }}</span>
          <button @click="checkout()" class="btn btn-light">Checkout</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
  export default {
    props: ['toggle', 'cart', 'inventory', 'remove', 'checkout'],
    methods: {
      getPrice(name) {
        return this.inventory.find(product => product.name === name).price.USD;
      },
      calculateTotal() {
        const total = Object.entries(this.cart).reduce((acc, [name, quant]) => {
          return acc + (quant * this.getPrice(name))
        }, 0)
        return total.toFixed(2);
      },
    }
  }
</script>