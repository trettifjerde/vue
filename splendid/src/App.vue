<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <div @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </div>
  </header>

  <SidebarComponent v-if="showSidebar" 
        :toggle="toggleSidebar"
        :cart="cart"
        :inventory="inventory"
        :remove="removeItem"
        :checkout="checkout" />

  <router-view 
    :inventory="inventory" 
    :cart="cart" 
    :addToCart="addToCart"
    :getIcon="getIcon"
    :pastOrders="pastOrders" />

</template>

<script>
  import SidebarComponent from './components/SidebarComponent.vue';
  import food from './food.json';

  export default {
    components: {
      SidebarComponent
    },
    data() {
        return {
            inventory: food,
            cart: {},
            showSidebar: false,
            pastOrders: []
        }
    },
    computed: {
      totalQuantity() {
        return Object.values(this.cart).reduce((acc, n) => { return acc + n }, 0)
      }
    },
    methods: {
        addToCart(name, n) {
          if (!this.cart[name]) {
            this.cart[name] = 0;
          }
          this.cart[name] += n;
          this.showSidebar = true;
        },
        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        },
        removeItem(name) {
          delete this.cart[name];
        },
        getIcon(product, sm=false) {

          if (sm)
            return 'icofont-'+ product.icon + ' icofont-4x';
          else
            return 'icofont-10x icofont-' + product.icon;
        },
        checkout() {
          Object.entries(this.cart).forEach(([name, quantity]) => {
            const product = this.inventory.find(i=>i.name === name);
            this.pastOrders.push({
              product: product,
              quantity: quantity,
              icon: this.getIcon(product, true),
              total: (quantity * product.price.USD).toFixed(2)
            });
            this.cart = {};
          });
        }
    },
  }
</script>
