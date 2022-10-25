<template>
    <main class="wrapper">
    <h1>Past Orders</h1>

    <table class="product-table">
        <thead>
        <tr>
            <td><span class="sr-only">Product Image</span></td>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td><span class="sr-only">Actions</span></td>
        </tr>
        </thead>
        <tbody>
            <PastOrderComponent v-for="(info, i) in pastOrders"
            :key="i" :info="info"/>
        </tbody>
    </table>
    </main>
</template>

<script>
import PastOrderComponent from "../components/PastOrderComponent.vue";
    export default {
    name: "PastOrdersView",
    props: ["pastOrders"],
    components: { PastOrderComponent }
};
</script>
