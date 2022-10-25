<template>
    <tr>
        <td><i :class="info.icon"/></td>
        <td>{{ info.product.name }}</td>
        <td>${{ info.product.price.USD }}</td>
        <td>{{ info.quantity }}</td>
        <td>${{ info.total }}</td>
        <td><button class="btn btn-dark">Add</button></td>
    </tr>
</template>

<script>
    export default {
        name: 'PastOrderComponent',
        props: ['info'],
    }
</script>